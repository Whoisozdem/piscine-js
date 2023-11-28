async function race(prom = []) {
    if (prom.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
    return Promise.race(prom);
  }

  async function some(prom, count) {
    if (prom.length === 0 || count === 0) {
        return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
        var results = [];
        let rest = count;
        prom.forEach((promise) => {
            if (promise instanceof Promise) {
                promise.then((result) => {
                    results.push(result);
                    rest--;
                    if (rest === 0) {
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]];
                        }
                        resolve(results);
                    }
                }, reject);
            } else {
                results.push(promise);
                rest--;
                if (rest === 0) {
                    resolve(results);
                }
            }
        });
    });
}