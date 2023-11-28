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
console.log(multiply(-22, 123))