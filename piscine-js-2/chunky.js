function chunk(arr, size) {
    let finchunk = [];
    let index = 0;

    while (index < arr.length) {
    let subarr = arr.slice(index, index + size);
    finchunk.push(subarr);
    index += size;
    }
    return finchunk;
}
