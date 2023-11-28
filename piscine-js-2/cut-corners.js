function round(num) {
    let partent = trunc(num);
    let partdec = num - partent;
    if (partdec >= 0.5) {
      return partent + 1;
    } else if (partdec <= -0.5) {
      return partent - 1;
    } else {
      return partent;
    }
}

function ceil(num){
    let partent = trunc(num)
    if (num >partent){
        return partent+1
    } else {
        return partent
    }
}

function floor(num) {
    let partent = trunc(num);
    if (num>0 && num>partent) {
        return partent
    }else if (num<0 && partent>num) {
        return partent-1
    } else {
        return partent
    }
}

function trunc(num) {
    if (num >= 0xfffffffff) {
        let cx =num - 0xfffffffff
        let mod = modulo(cx,1)
        return num-mod
      }
      if (num <0) {
          let posi = -num;
          let mod = modulo(posi,1);
          return -(posi - mod)
      } else {
          let mod = modulo(num,1)
          return num - mod
      }
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