function longWords(arr) {
    return arr.every(isplusfive)
}

function oneLongWord(arr) {
    return arr.some(isplusten)
}

function noLongWords(arr) {
    return !arr.some(isatleastseven)
}

function isplusfive(element) {
    return typeof(element)==="string" && element.length >= 5
  }
  function isplusten(element) {
    return typeof(element)==="string" && element.length >= 10
  }
  function isatleastseven(element) {
    return typeof(element)==="string" && element.length >= 7
  }

console.log(noLongWords(["er","effe","eeek"]));