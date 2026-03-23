const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('Starting puppeteer to fetch 30 reviews...');
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=pl-PL']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7' });

  // Direct link to the reviews tab of Auto-Diag
  const url = 'https://www.google.com/maps/place/Auto+Diag.+Autogaz,+elektronika+samochodowa/@49.8440704,19.0363426,17z/data=!4m8!3m7!1s0x47169f5f60c1d93f:0x4209d9293b526b6f!8m2!3d49.8440704!4d19.0363426!9m1!1b1!16s%2Fg%2F1tfnrr6n';
  
  try {
    console.log(`Navigating to reviews page...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Auto-click consent
    try {
      const acceptBtn = await page.$$('button');
      for (const btn of acceptBtn) {
        const text = await page.evaluate(el => el.textContent, btn);
        if (text.includes('Zaakceptuj wszystko') || text.includes('Zgadzam się') || text.includes('Zgadzam')) {
          await btn.click();
          await page.waitForTimeout(1500);
          break;
        }
      }
    } catch(e) {}

    console.log('Waiting for reviews container...');
    // The reviews container is usually the last scrollable div that contains review cards
    await page.waitForSelector('.jftiEf', { timeout: 15000 });

    let reviews = [];
    
    // Function to extract reviews from the current DOM
    const extractReviews = async () => {
      return await page.evaluate(() => {
        const reviewNodes = Array.from(document.querySelectorAll('.jftiEf'));
        return reviewNodes.map(node => {
          const authorEl = node.querySelector('.d4r55');
          const textEl = node.querySelector('.wiI7pd');
          const dateEl = node.querySelector('.rsqaWe');
          const starsEl = node.querySelector('.kvMYJc');
          
          const text = textEl ? textEl.textContent.trim() : '';
          const author = authorEl ? authorEl.textContent.trim() : 'Anonim';
          const date = dateEl ? dateEl.textContent.trim() : '';
          const stars = starsEl ? starsEl.getAttribute('aria-label') || '' : '';
          
          return { author, text, date, stars };
        }).filter(r => r.text && r.text.length > 10 && r.stars.includes('5'));
      });
    };

    let prevCount = 0;
    while (reviews.length < 32) {
      reviews = await extractReviews();
      console.log(`Found ${reviews.length} 5-star reviews with text...`);
      
      if (reviews.length >= 32) break;
      
      // Scroll the container. The main scrollable container in GMaps matches role="main" or aria-label="Auto Diag..."
      await page.evaluate(() => {
        const scrollable = document.evaluate("//div[contains(@class, 'm6QErb') and contains(@class, 'DxyBCb') and contains(@class, 'kA9KIf') and contains(@class, 'dS8AEf')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue 
                         || document.querySelector('.DxyBCb') || document.querySelector('.m6QErb.DxyBCb');
        if (scrollable) {
            scrollable.scrollTop = scrollable.scrollHeight;
        } else {
            // Scroll all scrollable divs just in case
            document.querySelectorAll('div').forEach(d => { if(d.scrollHeight > window.innerHeight) d.scrollTop = d.scrollHeight });
        }
      });
      
      await page.waitForTimeout(1500);
      
      // If we are stuck
      if (reviews.length === prevCount) {
        // Try focusing the last review and pressing PageDown
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
      }
      
      prevCount = reviews.length;
      if (prevCount > 0 && reviews.length === prevCount && reviews.length > 5) {
         // Break if perfectly stuck after 2 attempts
         break;
      }
    }

    // Deduplicate
    const uniqueReviews = Array.from(new Map(reviews.map(item => [item.text, item])).values());
    console.log(`Total unique 5-star reviews extracted: ${uniqueReviews.length}`);
    
    // Save exactly 30 (or whatever we got up to 30)
    fs.writeFileSync('extracted_30_reviews.json', JSON.stringify(uniqueReviews.slice(0, 30), null, 2));

  } catch (e) {
    console.error(`Error:`, e.message);
  }

  await browser.close();
  console.log('Done!');
})();
