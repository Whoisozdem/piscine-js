async function series(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(await arr[i]());
    }
    return result;
  }