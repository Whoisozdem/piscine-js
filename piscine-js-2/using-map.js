const citiesOnly = arrObject =>{
    return arrObject.map(object=>object.city)
}

const word = mot => mot.toUpperCase()
const capitalize = mot => {
    let prefix = mot.charAt(0)
   let suffix =  mot.slice(1)
   mot = word(prefix)+suffix.toLowerCase()
   return mot
}
const toupper=obj=>{
    let str =""
    let array =obj.split(" ")
   for (let index = 0; index < array.length; index++) {
    if (index===array.length-1){
    str += capitalize(array[index])

    }else{
        str += capitalize(array[index])+" "

    }
   }
   return str

}
const upperCasingStates = arrOfStr=>{
    return arrOfStr.map(obj=>toupper(obj))}

const fahrenheitToCelsius = arrFahreheit =>{

    return arrFahreheit.map(F=>Math.floor( (parseFloat(F.slice(0,-2))-32)*5/9 )+"°C")
}

const trimTemp = arrObject =>{return arrObject.map(obj=>{obj.temperature = obj.temperature.replaceAll(" ",""); 
 return obj})}
 const trim=obj=>{obj.temperature = obj.temperature.replaceAll(" ",""); 
 return obj.temperature}
 const fahrenheitT= F=>Math.floor( (parseFloat(F.slice(0,-2))-32)*5/9)+"°C"

const tempForecasts = arrObject =>{
return arrObject.map(obj=> fahrenheitT(trim(obj))+"elsius in "+toupper(obj.city)+", "+toupper(obj.state))
}