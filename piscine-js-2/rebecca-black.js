function isFriday(date) {
    return date.getDay() === 5;
  }
  
  function isWeekend(date) {
    const thedate = date.getDay();
    return thedate === 0 || thedate === 6;
  }
  
  function isLastDayOfMonth(date) {
    let nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
  }

function isLeapYear(date) {
    let year = date.getFullYear()
    if (year %4 ===0) {
        return true
    }
    if (year %100 ===0) {
        return true
    }
    return false
}