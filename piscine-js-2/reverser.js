function reverse(arr) {
    if (Array.isArray(arr)){
    let arrfin = [];
    for (let i=arr.length-1; i>=0; i--){
       arrfin.push(arr[i])
    }
    return arrfin
    } else {
    let strfin="";
    for (let i = arr.length-1; i >=0 ; i--){
            strfin +=arr[i];   
        }
        return strfin
    }
}
console.log(reverse([1, 2, 3]), [3, 2, 1]);