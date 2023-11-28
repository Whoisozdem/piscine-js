export function getArchitects() {
    let resfin = []
    let archis = document.getElementsByTagName('a');
    let nonarchis = document.getElementsByTagName('span');
    let arrarchis = Array.from(archis)
    let arrnonarchis = Array.from(nonarchis)
    resfin.push(arrarchis)
    resfin.push(arrnonarchis)
    return resfin
}

export function getClassical() {
    let resfin = [];
    let classical = document.querySelectorAll('.classical');
    let nonclassic = document.querySelectorAll('a:not(.classical)');
    let arrclass = [...classical];
    let arrnonclass = [...nonclassic];
    resfin.push(arrclass);
    resfin.push(arrnonclass);
    return resfin;
  }
  
 export function getActive() {
    return [[...document.querySelectorAll(".classical.active")],[...document.querySelectorAll(".classical:not(.active)")]];
}

export function getBonannoPisano() {
    return [document.getElementById("BonannoPisano"),[...document.querySelectorAll("a.classical.active")]];
}
