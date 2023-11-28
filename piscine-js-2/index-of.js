function indexOf(arr, val, ini=0){
    for (let i=ini; i<arr.length; i++) {
        if (arr[i]===val) {
            return i;
        }
    }
    return -1
}

function lastIndexOf(arr, val,fin=arr.length) {
    for (let i=fin; i>=0; i--) {
        if (arr[i]===val) {
           return i
        }
    }
    return -1
}

function includes(arr, val) {
    for (let piece of arr) {
        if (piece === val) {
            return true
        }
    }
    return false
}