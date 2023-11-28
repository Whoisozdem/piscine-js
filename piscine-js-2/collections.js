function arrToSet(arr) {
    return new Set(arr);
}
function arrToStr(arr){
    let str = ''
    for(let i = 0;i<arr.length;i++){
        str += arr[i]
    }
    return str
}
function setToArr(set) {
    return Array.from(set)
}
function setToStr(set) {
    let str = ''
    for (let elem of set.values()) {
    str += elem}
    return str
}
function strToArr(str) {
    return str.split("")
}
function strToSet(str){
    let set = new Set
    for(let i = 0;i<str.length;i++){
        set.add(str[i])
    }
    return set
}
function mapToObj(map) {
    let obj = {}
    for (var [key, value] of map.entries()) {
        obj[key] = value
      }
    return obj
}
function objToArr(obj) {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value)
      }
    return arr
}
function objToMap(obj) {
    return new Map(Object.entries(obj));
} 
function arrToObj(arr) {
    let obj = {}
    for(let i = 0;i<arr.length;i++){
        obj[i] = arr[i]
    }
    return obj
}
function strToObj(str) {
    let obj = {}
    for(let i = 0;i<str.length;i++){
        obj[i] = str[i]
    }
    return obj
}
const superTypeOf = (e) => {
    if (e=== null) return 'null'

  let instances = { Set, Map, Array, Function }

  for (let key in instances) {
    if (e instanceof instances[key]) return key
  }

  let types = { Number: 'number', String: 'string', Object: 'object' }
  for (let key in types) {
    if (typeof e=== types[key]) return key
  }

  return typeof e
}