import process from 'process'

function separate(word) {
    let half = Math.ceil(word.length / 2);
    let first = word.slice(0, half);
    let sec = word.slice(half);
    let finword = sec + first;
    return finword.trim(); 
  }
  

function sepsentence(sent) {
  let words = sent.split(' ');
  let finwords = words.map(separate);
  return finwords.join(' ');
}

if (process.argv.length < 3) {
  console.log('Please give at least an argument.');
} else {
  let input = process.argv[2];
  if (input.includes(' ')) {
    let finsent = sepsentence(input);
    console.log(finsent);
  } else {
    let finalword = separate(input);
    console.log(finalword);
  }
}
