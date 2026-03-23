const puppeteer = require('puppeteer');
const fs = require('fs');

const delay = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=pl-PL']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const url = 'https://www.google.com/maps/place/Auto+Diag.+Autogaz,+elektronika+samochodowa/@49.8440704,19.0363426,17z/data=!4m8!3m7!1s0x47169f5f60c1d93f:0x4209d9293b526b6f!8m2!3d49.8440704!4d19.0363426!9m1!1b1!16s%2Fg%2F1tfnrr6n';
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Auto-click consent
    try {
      const btns = await page.$$('button');
      for (const btn of btns) {
        const text = await page.evaluate(el => el.textContent, btn);
        if (text && (text.includes('Zaakceptuj') || text.includes('Zgadzam') || text.includes('Accept'))) {
          await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }).catch(() => {}),
            btn.click()
          ]);
          break;
        }
      }
    } catch(e) {}

    await delay(3000);

    let reviews = [];
    
    const extractReviews = async () => {
      return await page.evaluate(() => {
        const nodes = document.querySelectorAll('.jftiEf');
        const results = [];
        nodes.forEach(n => {
          const authorEl = n.querySelector('.d4r55');
          const textEl = n.querySelector('.wiI7pd');
          const dateEl = n.querySelector('.rsqaWe');
          const starsEl = n.querySelector('.kvMYJc');
          
          const text = textEl ? textEl.textContent.trim() : '';
          const author = authorEl ? authorEl.textContent.trim() : 'Anonim';
          const stars = starsEl ? (starsEl.getAttribute('aria-label') || '') : '';
          
          if (text.length > 5 && stars.includes('5')) {
             results.push({
               author,
               text,
               date: dateEl ? dateEl.textContent.trim() : ''
             });
          }
        });
        return results;
      });
    };

    let stuck = 0;
    while(reviews.length < 32 && stuck < 10) {
      const newReviews = await extractReviews();
      if (newReviews.length > reviews.length) {
         reviews = newReviews;
         stuck = 0;
         console.log(`Currently at ${reviews.length} reviews...`);
      } else {
         stuck++;
      }
      
      // Focus a review and page down
      await page.keyboard.press('Tab');
      await page.keyboard.press('PageDown');
      await delay(1000);
      
      // Click "Więcej"
      await page.evaluate(() => {
        document.querySelectorAll('button').forEach(b => {
          if(b.textContent.includes('Więcej') || b.textContent.includes('More')) b.click();
        });
        // Scroll the div
        const s = document.evaluate("//div[contains(@class, 'm6QErb') and contains(@class, 'DxyBCb') and contains(@class, 'kA9KIf')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if(s) s.scrollTop = s.scrollHeight;
      });
      await delay(1000);
    }

    const uniqueReviews = Array.from(new Map(reviews.map(item => [item.text, item])).values());
    console.log(`Total unique 5-star reviews extracted: ${uniqueReviews.length}`);
    
    fs.writeFileSync('src/data/extracted_30_reviews.json', JSON.stringify(uniqueReviews.slice(0, 30), null, 2));

  } catch (e) {
    console.error(`Error:`, e.stack);
  }

  await browser.close();
  console.log('Done!');
})();
