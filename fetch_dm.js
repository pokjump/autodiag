const https = require('https');
const fs = require('fs');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHTML(res.headers.location.startsWith('http') ? res.headers.location : `https://dobrymechanik.pl${res.headers.location}`));
      }
      let html = '';
      res.on('data', c => html += c);
      res.on('end', () => resolve(html));
      res.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  try {
    console.log('Fetching search results...');
    const searchHtml = await fetchHTML('https://dobrymechanik.pl/szukaj?q=Auto-Diag+Bielsko+Biala');
    
    // Find the profile link
    const profileMatch = searchHtml.match(/href="(\/mechanicy\/bielsko-biala\/auto-diag[^"]+)"/);
    if (!profileMatch) {
       console.log('Profile not found! Writing raw HTML for debug.');
       fs.writeFileSync('dm_search.html', searchHtml);
       return;
    }
    
    const profileUrl = `https://dobrymechanik.pl${profileMatch[1]}#opinie`;
    console.log(`Found profile: ${profileUrl}`);
    
    // Now fetch reviews
    const profileHtml = await fetchHTML(profileUrl);
    
    const reviews = [];
    const reviewBlocks = profileHtml.split('class="review"').slice(1);
    
    for (const block of reviewBlocks) {
       // Extract author
       const authorMatch = block.match(/class="author"[^>]*>([^<]+)</);
       // Extract text
       const textMatch = block.match(/class="text"[^>]*>([^<]+)</) || block.match(/class="review-content"[^>]*>([^<]+)</);
       // Date
       const dateMatch = block.match(/class="date"[^>]*>([^<]+)</);
       
       if (authorMatch && textMatch) {
          reviews.push({
            author: authorMatch[1].trim(),
            text: textMatch[1].trim(),
            date: dateMatch ? dateMatch[1].trim() : 'niedawno'
          });
       }
    }
    
    console.log(`Scraped ${reviews.length} reviews from DobryMechanik!`);
    fs.writeFileSync('dm_reviews.json', JSON.stringify(reviews, null, 2));

  } catch (e) {
    console.error(e);
  }
})();
