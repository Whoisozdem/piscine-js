function isValid(date) {
    let nvdate = new Date(date)
    if (!(date instanceof Date) && typeof(date)!=="number") {
        return false
    }
    if (nvdate.toString()==="Invalid Date") {
        return false
    }
    return true
}

function isAfter(date1, date2) {
    if (date1 > date2) {
        return true
    }
    return false
}

function isBefore(date1, date2) {
    if (date1 < date2) {
        return true
    }
    return false
}

function isFuture(date) {
   if ((isValid(date))) {
    return date > Date.now()
   }
   return false
}

function isPast(date) {
    if ((isValid(date))) {
        return date < Date.now()
       }
       return false
}

console.log(isValid(Date.now()));
console.log(isValid(''))