function filter(arr, func) {
    let arrfin = []
    for (let i = 0; i < arr.length; i++) {
    if (func(arr[i],i,arr)) {
        arrfin.push(arr[i])
    }        
    }
    return arrfin
}
function reject(arr, func) {
    let arrfin = []
    for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i],i,arr)) {
        arrfin.push(arr[i])
    }        
    }
    return arrfin
}

function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)]
}