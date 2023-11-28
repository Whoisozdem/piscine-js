function pyramid(stri, num) { 
    var resfin = ''; 
    for (var i = 1; i <= num; i++) { 
        resfin +=" ".repeat(num-i).repeat(stri.length)
        resfin+= stri.repeat(i*2 -1)
        if (i===num) {
            return resfin
        }
        resfin += "\n"
  }
  return resfin
}