const fs = require('fs');
const path = require('path');

const opiniePath = path.join(__dirname, 'opinie.json');
const rawData = fs.readFileSync(opiniePath, 'utf8');
const opinie = JSON.parse(rawData);

const reviews = opinie.filter(o => o.ocena === 5).map(o => {
  // Generate avatars with initials
  // We can just pass the name to ui-avatars and it handles the initials logic automatically
  const encodedName = encodeURIComponent(o.uzytkownik);
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodedName}&background=random&color=fff&size=128&length=2`;
  
  return {
    author: o.uzytkownik,
    date: 'Z Google', // default date since it's not in JSON
    text: o.tresc.replace(/\n/g, ' '),
    avatar: avatarUrl
  };
});

let tsCode = `export interface Review {
  author: string;
  date: string;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
`;

for (const r of reviews) {
  tsCode += `  {
    author: ${JSON.stringify(r.author)},
    date: ${JSON.stringify(r.date)},
    text: ${JSON.stringify(r.text)},
    avatar: ${JSON.stringify(r.avatar)},
  },
`;
}

tsCode += `];

export default reviews;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'reviews.ts'), tsCode);
console.log(`Generated ${reviews.length} reviews and saved to src/data/reviews.ts`);
