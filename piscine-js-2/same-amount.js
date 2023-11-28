function sameAmount(str, regex1, regex2) {
    var regex1 = new RegExp(regex1,'g') || []
    var regex2 = new RegExp(regex2,'g') || []
    let reg1 = str.match(regex1)
    let reg2 = str.match(regex2)
     if ((reg1 !==null && reg2 !==null)&&(reg1.length === reg2.length)) {
        return true
     } else {
        return false
     }
}
console.log(sameAmount("dataihigrihiksnnv,ns c qqqqqqq qqq", /q /, /qqqqqqq/));