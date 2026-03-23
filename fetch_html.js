const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=pl-PL']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  const url = 'https://www.google.com/maps/place/Auto+Diag.+Autogaz,+elektronika+samochodowa/@49.8440704,19.0363426,17z/data=!4m8!3m7!1s0x47169f5f60c1d93f:0x4209d9293b526b6f!8m2!3d49.8440704!4d19.0363426!9m1!1b1!16s%2Fg%2F1tfnrr6n';
  
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  // click consent
  try {
    const btns = await page.$$('button');
    for (const b of btns) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text.includes('Zaakceptuj') || text.includes('Zgadzam')) {
        await b.click();
        await page.waitForTimeout(2000);
      }
    }
  } catch(e) {}
  
  // wait 5 seconds for React to render Maps
  await page.waitForTimeout(5000);
  
  // scroll a bit
  await page.mouse.wheel({ deltaY: 2000 });
  await page.waitForTimeout(2000);
  
  // grab all text nodes in div
  const html = await page.evaluate(() => document.body.innerHTML);
  fs.writeFileSync('maps_dump.html', html);
  await browser.close();
})();
