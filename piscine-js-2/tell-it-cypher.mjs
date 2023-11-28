import { writeFile, readFile } from 'fs/promises';
import process from 'process';

async function encode(input, output) {
  let file = await readFile(input);
  let encfile = Buffer.from(file).toString('base64');
  await writeFile(output, encfile, 'utf-8');
  console.log(`File encoded: ${output}`);
}

async function decode(input, output) {
  let file = await readFile(input, 'utf-8');
  let decfile = Buffer.from(file, 'base64').toString('utf-8');
  await writeFile(output, decfile, 'utf-8');
  console.log(`File decoded: ${output}`);
}

async function main() {
  if (process.argv.length < 4) {
    console.log('Not enough arguments passed');
    return;
  }

  let input = process.argv[2];
  let action = process.argv[3];
  let output = process.argv[4] || (action === 'encode' ? 'cypher.txt' : 'clear.txt');

  switch (action) {
    case 'encode':
      await encode(input, output);
      break;
    case 'decode':
      await decode(input, output);
      break;
    default:
      console.log('Invalid action.');
  }
}

main();
