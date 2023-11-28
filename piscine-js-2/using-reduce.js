function adder(arr, initialValue = 0) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  }

  function sumOrMul(numbers,initialValue = 0) {
    return numbers.reduce((accumulator, currentValue) => {
      if (currentValue % 2 === 0) {
        return accumulator * currentValue;
      } else {      
        return accumulator + currentValue;
      }
    }, initialValue);
  }

  function funcExec(arr, cumul = 0) {
    return arr.reduce((accumulator, currentfunc) => {
      return currentfunc(accumulator);
    }, cumul);
  }