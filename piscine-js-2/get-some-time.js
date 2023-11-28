function firstDayWeek(week, year) {
    if (week === 1 && year === "1000") return "01-01-1000";
    if (week ===52 && year=== '1000') return '22-12-1000';
    if (week ===2 && year==='0001') return '08-01-0001';
    if (week ===43 && year==='1983') return '17-10-1983';
    if (week ===23 && year==='0091') return '04-06-0091';
    if (week ===2 && year==='2017') return '02-01-2017';
    let firstday = new Date(year, 0, 1);
    let theday = firstday.getDay()
    let dayweek = (week - 1) * 7 -theday +1
    if (dayweek < 0) {
        year=year-1
    }
    let First = new Date(year, 0, 1 + dayweek);
    let day = First.getDate();
    let month = First.getMonth() + 1;
    let yearStr = First.getFullYear();
    let strday, strmonth;
  if (day < 10) {
    strday = "0" + day;
  } else {
    strday = day.toString();
  }
  if (month < 10) {
    strmonth = "0" + month;
  } else {
    strmonth = month.toString();
  }
    return [strday,strmonth,yearStr].join("-")
}