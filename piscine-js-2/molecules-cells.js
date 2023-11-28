function RNA(cell){
    let resfin = ""
   for (let i = 0; i < cell.length; i++) {
    const brain = cell[i];
    if (brain ==="G"){
        resfin+="C"
    } else if (brain ==="C"){
         resfin+="G"
    }else if (brain ==="T"){
        resfin+="A"
    }else if (brain ==="A"){
        resfin+="U"
    } else {
        resfin+=brain
    }
   }
   return resfin
}

function DNA(cell){
    let resfin = ""
    for (let i = 0; i < cell.length; i++) {
     const brain = cell[i];
     if (brain ==="C"){
         resfin+="G"
     } else if (brain ==="G"){
          resfin+="C"
     }else if (brain ==="A"){
         resfin+="T"
     }else if (brain ==="U"){
         resfin+="A"
     } else {
         resfin+=brain
     }
    }
    return resfin
}