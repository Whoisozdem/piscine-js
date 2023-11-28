function sunnySunday(date) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayinmilli = 24 * 60 * 60 * 1000;
    var middate = Math.abs(date - new Date('0001-01-01'))
  let diff = Math.floor(middate / dayinmilli);
  let weekdayIndex = (diff) % 6;

  return days[weekdayIndex];
}