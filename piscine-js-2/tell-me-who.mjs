import { readdir } from 'fs/promises';
import process from 'process';

async function list(path) {
  try {
    const entries = await readdir(path);
    const guest = entries.filter((entry) => entry.endsWith('.json'));
    const guests = [];

    for (const file of guest) {
      const name = file.split('.')[0].split('_').reverse().join(' ');
      guests.push(name);
    }

    const sorting = guests.sort();
    return sorting;
  } catch (error) {
    throw error;
  }
}

async function main() {
  const path = process.argv[2] || '.';
  try {
    const guests = await list(path);
    guests.forEach((guest, index) => console.log(`${index + 1}. ${guest}`));
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();
