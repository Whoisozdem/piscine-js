import { readdir } from 'fs/promises';
import process from 'process';

async function main() {
  const directoryPath = process.argv[2] || '.';
  
  try {
    const entries = await readdir(directoryPath);
    console.log(entries.length);
  } catch (error) {
    console.error(`Error reading the directory: ${error.message}`);
  }
}

main();
