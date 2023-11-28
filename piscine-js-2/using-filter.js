function filterShortStateName(arr) {
    const result = arr.filter((word) => word.length < 7);
    return result
}

function filterStartVowel(arr) {
    const result = arr.filter(vowelfirst);
    return result
}

function filter5Vowels(arr) {
    const result = arr.filter(arr => checkfive(arr))
    return result
}

function filter1DistinctVowel(strings) {
    return strings.filter(str => has1DistinctVowel(str));
  }

function vowelfirst(word){
    var vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(word[0]) !== -1;
 }
 
function checkfive(str) {
        const countvow = str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
        return countvow >= 5;
        }
    
  function has1DistinctVowel(str) {
    const vow = 'aeiou';
    let distvow = '';
    for (const char of str.toLowerCase()) {
      if (vow.includes(char)) {
        if (distvow === '' || distvow === char) {
          distvow = char;
        } else {
          return false;
        }
      }
    }
    return distvow !== '';
  }

  function multiFilter(obj) {
    return obj.filter(obj => {
      const longcap = obj.capital.length >= 8;
        const startvow = 'aeiouAEIOU'.includes(obj.name[0].toLowerCase());
        const taginvow = /[aeiouAEIOU]/.test(obj.tag);
        const isnotsth = obj.region.toLowerCase() !== "south";
        return longcap && !startvow && taginvow && isnotsth;
    });
  }
  