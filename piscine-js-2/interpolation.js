async function interpolation({ step, start, end, callback, duration }) {
    const newstep = (end - start) / step;
  
    for (let i = 0; i < step; i++) {
      const x = start + i * newstep;
      const y = (i + 1) * (duration / step);
  
      await new Promise((solution) => {
        setTimeout(() => {
          callback([x, y]);
          solution();
        }, duration / step);
      });
    }
  }
  