function slice(strarr, ini, end) {
    if (ini<0) {
        ini = strarr.length+ini
    }
    if ((end<0) && (end !=null)) {
        end = strarr.length +end
    }
    let ver = strarr.length
    if (end !=null) {
        ver = end
    }

    if(Array.isArray(strarr)) {
        let fin=[]
        for (let i = ini; i < ver; i++){
            fin.push(strarr[i]);   
        }
        return fin
    } else {
        let fin=""
        for (let i = ini; i < ver; i++){
            fin +=strarr[i];   
        }
        return fin
    }
}