function forEach(arr, callback) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
          } 
    } else if(typeof(arr) === 'object') {    
        for(var elem in arr){  
          callback(arr[elem],elem, arr);    
        }  
      }
  }