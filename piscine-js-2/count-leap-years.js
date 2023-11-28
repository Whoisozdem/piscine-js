function isLeapYear(date) {
    if (date %4 ===0 && (date %100 !==0) || (date %400 ===0)) {
        return true
    }
    return false
}

function countLeapYears(date) {
    let year = date.getFullYear();
    let numbleapyear = 0;
  
    for (let i = 1; i <= year; i++) {
      if (isLeapYear(i)) {
        numbleapyear++;
      }
    }
    if(numbleapyear>0){
        return numbleapyear-1
    }else {
        return numbleapyear
    }
  }

console.log(countLeapYears(new Date('0001-12-01'))); 
console.log(countLeapYears(new Date('1664-08-09'))); 
console.log(countLeapYears(new Date('2020-01-01'))); 
console.log(countLeapYears(new Date('2048-12-08')));

