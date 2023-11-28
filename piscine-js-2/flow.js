function flow(arr) {
  return function (...args) {
    let result = arr[0](...args);

    for (let i = 1; i < arr.length; i++) {
      result = arr[i](result);
    }
    return result;
  };
}
