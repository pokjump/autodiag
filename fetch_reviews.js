const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=pl-PL']
  });
  
  const urls = [
    'https://maps.app.goo.gl/6f9qd1gjcnhsqJcS9',
    'https://maps.app.goo.gl/j9kCvnGXY4gLNzem6',
    'https://maps.app.goo.gl/yY68JxxhJQz7vkBm6'
  ];

  const results = [];

  for (const url of urls) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7' });
    
    try {
      console.log(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Auto-click consent if present
      try {
        const acceptBtn = await page.$$('button');
        for (const btn of acceptBtn) {
          const text = await page.evaluate(el => el.textContent, btn);
          if (text.includes('Zaakceptuj wszystko') || text.includes('Zgadzam się')) {
            await btn.click();
            await page.waitForTimeout(1000);
            break;
          }
        }
      } catch(e) {}

      console.log('Waiting for selectors...');
      // Wait for the h1 which has the author name or the review text
      await page.waitForSelector('.wiI7pd', { timeout: 10000 }).catch(() => {});
      
      const reviewData = await page.evaluate(() => {
        // Author is usually in a h1 on the standalone review page or in .d4r55
        const authorEl = document.querySelector('h1.DUwDvf') || document.querySelector('.d4r55');
        // Review text
        const textEl = document.querySelector('.wiI7pd');
        // Date
        const dateEl = document.querySelector('.rsqaWe');
        
        return {
          author: authorEl ? authorEl.textContent.trim() : 'Unknown',
          text: textEl ? textEl.textContent.trim() : 'No text provided',
          date: dateEl ? dateEl.textContent.trim() : 'Unknown'
        };
      });
      console.log(`Result for ${url}:`, reviewData);
      results.push(reviewData);
    } catch (e) {
      console.error(`Error processing ${url}:`, e.message);
      results.push({ author: 'Error', text: 'Error', date: 'Error' });
    }
    await page.close();
  }

  await browser.close();
  fs.writeFileSync('extracted_reviews.json', JSON.stringify(results, null, 2));
  console.log('Done!');
})();
