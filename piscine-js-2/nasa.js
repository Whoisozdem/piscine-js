function nasa(N) {
    const result = [];
    for (let num = 1; num <= N; num++) {
      if ((modulo(num,3)=== 0) && (modulo(num,5) === 0)) {
        result.push("NASA");
      } else if (modulo(num,3) === 0) {
        result.push("NA");
      } else if (modulo(num,5) === 0) {
        result.push("SA");
      } else {
        result.push(num.toString());
      }
    }
    return join(result,' ');
  }

function multiply(a, b) {
    let numini = 0
    for (let i=0 ; i< Math.abs(b); i++) {
         numini = numini+a 
    }
    if (a<0 && b<0) {
        return Math.abs(numini)
    }
    if (a<0) {
        return numini;
    }
    if (b<0) {
        return -numini;
    }
    return numini
}

function divide(a, b) {
    let x = Math.abs(a)
    let y =Math.abs(b)
    if (a == 0) {return 0}
    if (b == 0) {return Infinity}
    let quotient = 0; 
    let negcheck  = false
        while (x >= y) 
        { 
            x = x - y; 
            quotient++; 
        } 
    if ((a < 0 && b > 0) || (a>0 && b<0)) { 
        negcheck = true
    }
    if (x>y) {
        return 0
    }
    if (negcheck) {
            quotient = -quotient;
        }
    return quotient
}

function modulo(a, b) {
    let resdiv = divide(a,b);
    let resmult = multiply(resdiv,b);
    return a - resmult
}

function join(arr, sep) {
    if (sep === null) {
        sep = ",";
    }
    var result = arr[0].toString();
    for (var i = 1; i < arr.length; i++) {
        result += sep + arr[i];
    }
    return result;
}