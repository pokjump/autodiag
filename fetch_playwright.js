const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'pl-PL'
  });
  const page = await context.newPage();
  
  const urls = [
    'https://maps.app.goo.gl/6f9qd1gjcnhsqJcS9',
    'https://maps.app.goo.gl/j9kCvnGXY4gLNzem6',
    'https://maps.app.goo.gl/yY68JxxhJQz7vkBm6'
  ];

  const results = [];

  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'load' });
      // Wait for the review text to appear. Google maps usually has .wiI7pd for review text
      // We also look for the author name which is usually in a h1 or inside .d4r55
      await page.waitForTimeout(4000); // 4 seconds should be enough for Google Maps to render the expanded review pane

      // Sometimes Google shows a consent page. Try to click "I agree" or just evaluate anyway.
      try {
        await page.locator('button:has-text("Zaakceptuj wszystko")').click({ timeout: 2000 });
      } catch (e) {}
      
      const reviewData = await page.evaluate(() => {
        const authorEl = document.querySelector('.d4r55') || document.querySelector('h1.DUwDvf');
        const textEl = document.querySelector('.wiI7pd');
        const dateEl = document.querySelector('.rsqaWe');
        
        return {
          author: authorEl ? authorEl.textContent.trim() : 'Unknown',
          text: textEl ? textEl.textContent.trim() : 'No text provided',
          date: dateEl ? dateEl.textContent.trim() : 'Unknown'
        };
      });
      console.log(`--- Result for ${url} ---`);
      console.log(`Author: ${reviewData.author}`);
      console.log(`Text: ${reviewData.text}`);
      console.log(`Date: ${reviewData.date}`);
      console.log(`-----------------------`);
      results.push(reviewData);

    } catch (e) {
      console.error(`Failed to scrape ${url}`, e);
    }
  }

  await browser.close();
  fs.writeFileSync('extracted_reviews.json', JSON.stringify(results, null, 2));
})();
