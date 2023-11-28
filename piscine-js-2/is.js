is.num = function(x) {
    return typeof(x)=="number"
}
is.nan = function(x) {
    return Number.isNaN(x)
}
is.str = function(x) {
    return typeof(x)=="string"
}
is.bool = function(x) {
    return typeof(x)=="boolean"
}
is.undef = function(x) {
    return typeof(x)=="undefined"
}
is.def = function(x) {
    return !is.undef(x)
}
is.arr = function(x) {
    return Array.isArray(x)
}
is.obj = x => x !== null && typeof x === "object" && !Array.isArray(x);
is.fun = function(x) {
    return typeof (x)=="function";
} 
is.truthy = function(x) {
    return x
}
is.falsy = function(x) {
    return !x
}