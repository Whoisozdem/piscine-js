function fold(arr, func, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i],i,arr)
        }  
    return acc
}

function foldRight(arr, func, acc) {
    for (let i = arr.length-1;i>=0; i--) {
        acc = func(acc, arr[i],i,arr)
        }  
    return acc
}

function reduce(arr, func) {
    let acc = arr[0]
    if (arr.length <1) {
        throw new Error("Array with less than one argument!") 
    } else {
    for (let i = 1; i < arr.length; i++) {
        acc = func(acc, arr[i],i,arr)
        }  
    return acc
    }
}

function reduceRight(arr, func) {
    let acc = arr[arr.length-1]
    for (let i = arr.length-2;i>=0; i--) {
        acc = func(acc, arr[i],i,arr)
        }  
    return acc
    }