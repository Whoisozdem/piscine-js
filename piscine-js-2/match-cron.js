function matchCron(cron, date) {
    let cronarr = cron.split(" ")
    let themin = cronarr[0]
    let thehour = cronarr[1]
    let theday = cronarr[2]
    let themonth = cronarr[3]
    let weekday = cronarr[4]
    let check = true
    if (themin==="*" || themin==date.getMinutes()) {
        check
    }else {
        return false
    }
    if (thehour==="*" || thehour==date.getHours()) {
         check
    }else {
        return false
    }
        if (theday==="*" || theday==date.getDate()) {
        check
        }else {
            return false
        }
    if (themonth==="*" || themonth==date.getMonth()+1) {
         check
    }else {
        return false
    }
    if (weekday==="*") {
        check
    } else if (weekday==7 && date.getDay()===0) {
        check
    } else if(parseInt(weekday)===date.getDay()){
        check
    }
    else {
        return false
}
return check
}

console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')));