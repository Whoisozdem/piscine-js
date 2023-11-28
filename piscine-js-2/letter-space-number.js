function letterSpaceNumber(str) {
    let res = []
    var resin = /([a-zA-Z])\s(\d(?!\d))(?!\w)/g
    var fine = str.match(resin);
    for (let i = 0; i < str.length; i++) {
    if (fine) {
        return fine
    } else {
        return res
        }      
    }
    return res
}