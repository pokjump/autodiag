const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://maps.app.goo.gl/6f9qd1gjcnhsqJcS9',
    'https://maps.app.goo.gl/j9kCvnGXY4gLNzem6',
    'https://maps.app.goo.gl/yY68JxxhJQz7vkBm6'
  ];

  for (let i = 0; i < urls.length; i++) {
    try {
      const html = await fetchUrl(urls[i]);
      // Google Maps puts the data in scripts. Let's find long strings that might be the review.
      // Usually, it's inside window.APP_INITIALIZATION_STATE.
      const msgs = html.match(/"([^"]{30,})"/g) || [];
      // Filter out obvious JSON keys and HTML tags
      const texts = msgs.map(m => m.replace(/"/g, '')).filter(m => 
        !m.includes('<') && 
        !m.includes('http') && 
        !m.includes('window.') &&
        m.length > 50 &&
        m.includes(' ')
      );
      
      console.log(`\n\n--- Review ${i+1} ---`);
      // Print the top 5 longest unique strings, one of them is the review!
      const unique = [...new Set(texts)].sort((a,b) => b.length - a.length).slice(0, 5);
      unique.forEach(u => console.log('>>', u.substring(0, 150) + '...'));
      
    } catch (e) {
      console.error(e);
    }
  }
}

run();
