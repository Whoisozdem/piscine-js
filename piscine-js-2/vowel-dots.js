let vowels = /[aeiouAEIOU]/g
function vowelDots(str) {
   const strfin =  str.replaceAll(vowels,'$&.')     
    return strfin;
}