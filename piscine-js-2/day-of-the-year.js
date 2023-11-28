function dayOfTheYear(date) {
    let days = 1;
    while (!isFirstday(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}

function isFirstday(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}