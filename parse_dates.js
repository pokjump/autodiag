const fs = require('fs');
const path = require('path');

const opiniePath = path.join(__dirname, 'opinie.json');
const rawData = fs.readFileSync(opiniePath, 'utf8');
const opinie = JSON.parse(rawData);

// Base date: today
const now = new Date();

function parseRelativeDate(text) {
  // e.g. "miesiąc temu", "4 miesiące temu", "Edytowano 3 lata temu"
  let parsedDate = new Date(now.getTime());
  
  if (!text) return parsedDate;
  
  const t = text.toLowerCase();
  
  // Extract number if exists, default to 1
  const numMatch = t.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 1;
  
  if (t.includes('rok') || t.includes('lata') || t.includes('lat')) {
    parsedDate.setFullYear(parsedDate.getFullYear() - num);
  } else if (t.includes('miesiąc') || t.includes('miesiące') || t.includes('miesięcy')) {
    parsedDate.setMonth(parsedDate.getMonth() - num);
  } else if (t.includes('tydzień') || t.includes('tygodnie') || t.includes('tygodni')) {
    parsedDate.setDate(parsedDate.getDate() - num * 7);
  } else if (t.includes('dzień') || t.includes('dni')) {
    parsedDate.setDate(parsedDate.getDate() - num);
  } else if (t.includes('godzin')) {
    parsedDate.setHours(parsedDate.getHours() - num);
  } else if (t.includes('minut')) {
    parsedDate.setMinutes(parsedDate.getMinutes() - num);
  }
  
  return parsedDate;
}

const reviews = opinie.filter(o => o.ocena === 5).map(o => {
  const encodedName = encodeURIComponent(o.uzytkownik);
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodedName}&background=random&color=fff&size=128&length=2`;
  
  const absoluteDate = parseRelativeDate(o.data);
  
  return {
    author: o.uzytkownik,
    createdAt: absoluteDate.toISOString(), // Save as ISO string!
    text: o.tresc.replace(/\n/g, ' '),
    avatar: avatarUrl
  };
});

let tsCode = `export interface Review {
  author: string;
  createdAt: string;
  text: string;
  avatar: string;
}

// Automatically generated 30 reviews with dynamic timestamps
const reviews: Review[] = [
`;

// Only take 30
for (const r of reviews.slice(0, 30)) {
  tsCode += `  {
    author: ${JSON.stringify(r.author)},
    createdAt: ${JSON.stringify(r.createdAt)},
    text: ${JSON.stringify(r.text)},
    avatar: ${JSON.stringify(r.avatar)},
  },
`;
}

tsCode += `];

export default reviews;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'reviews.ts'), tsCode);
console.log('Done generating dates!');
