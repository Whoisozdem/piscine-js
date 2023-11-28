function deepCopy(obj) {
    let resfin
    if (Array.isArray(obj)) {
        resfin = [];
        for (let i = 0; i < obj.length; i++) {
            resfin[i] = deepCopy(obj[i])
        }
    } else if (toString.call(obj).slice(8, -1) === 'Object') {
        resfin = {};
        Object.keys(obj).forEach(key => (resfin[key] = deepCopy(obj[key])));
    } else {
        resfin = obj
    }
    return resfin
}