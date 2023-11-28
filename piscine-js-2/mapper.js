function map(arr, callback) {
    const maparr = [];
    for (let i = 0; i < arr.length; i++) {
      maparr.push(callback(arr[i], i, arr));
    }
    return maparr;
  }

  function flatMap(arr, callback) {
    const flatmaparr = [];
    for (let i = 0; i < arr.length; i++) {
      const values = callback(arr[i], i, arr);
      if (Array.isArray(values)) {
        flatmaparr.push(...values);
      } else {
        flatmaparr.push(values);
      }
    }
    return flatmaparr;
  }