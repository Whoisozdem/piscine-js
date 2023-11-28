function cutFirst(str) {
    let fin=""
        for (let i = 2; i < str.length; i++){
            fin +=str[i];   
        }
        return fin
}
function cutLast(str) {
    return str.slice(0,str.length-2)
}
function cutFirstLast(str) {
    return str.slice(2,str.length-2)
}
function keepFirst(str){
    return str.slice(0,2)
}
function keepLast(str) {
    return str.slice(-2)
}
function keepFirstLast(str) {
    let reslt = keepFirst(str) + keepLast(str)
    if (str.length ==2) {
        return str
    } else if (str.length==3){
        return str
    }else {
    return reslt
    }
}
console.log(keepFirstLast("afa"));