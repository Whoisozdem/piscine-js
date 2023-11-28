function words(str) {
    let splistr = str.split(" ");
    return splistr
}
function sentence(arr) {
    let joinsstr = arr.join(" ")
    return joinsstr
}
function yell(str) {
    return str.toUpperCase()
}
function whisper(str) {
    let brut = `${"*"}${str}${"*"}`
    return brut.toLowerCase()
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}