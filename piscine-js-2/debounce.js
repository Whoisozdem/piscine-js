function debounce(func, delay) {
    let timeout;
  
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  
  function opDebounce(func, delay, leading = false) {
    let timeout;
  
    return function () {
      const current = leading && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        if (!leading) {
          func.apply(this, arguments);
        }
      }, delay);
  
      if (current) {
        func.apply(this, arguments);
      }
    };
  }
  