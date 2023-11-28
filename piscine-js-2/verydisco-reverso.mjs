import fs from 'fs/promises';
import process from 'process';

async function reverse(sent) {
    const words = sent.split(' ');
    const revwords = [];
  
    for (const word of words) {
      const half = Math.floor(word.length / 2);
      const first = word.slice(0, half);
      const sec = word.slice(half);
      revwords.push(sec + first);
    }
  
    return revwords.join(' ');
  }
  

async function main() {
  if (process.argv.length < 3) {
    console.log('Please provide a file name as an argument.');
    return;
  }

  const fileName = process.argv[2];

  try {
    const fileContent = await fs.readFile(fileName, 'utf8');
    const reversedContent = await reverse(fileContent);
    console.log(reversedContent);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();
