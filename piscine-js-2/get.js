function get(src, path) {

    var path = path.split('.');  
  for (let i = 0; i < path.length; i++) {
        src = src[path[i]]
        if (src ==null) {
            return undefined
        }
  }
  return src
}