function addWeek(theDate) {
    var days = [ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday", "secondSunday"]
    var dayinmilli = 1000 * 3600 * 24;
    var middate = Math.abs(theDate - new Date('0001-01-01'))
    var findate = Math.trunc( middate/ dayinmilli)
    var findateindex = findate%14
   for (let i = 0; i < days.length; i++) {
    if (findateindex===i) {
        return days[i]
    }    
   }
}

function timeTravel(obj) {
   let newobj = new Date(obj.date.setHours(obj.hour,obj.minute,obj.second))  
   return newobj
}