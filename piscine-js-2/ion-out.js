function ionOut(str) {
    let resfin = [];
    const regex = /(\w*tion)\b/g;
   const matching = str.match(regex)
    if (matching) {
        for (const match of matching) {
          const finalmatch = match.replace(/ion$/, '');
          resfin.push(finalmatch);
        }
      }
      return resfin
}

console.log(ionOut('promotion, provision'));