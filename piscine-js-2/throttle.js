function throttle (func, limit) {
    var wait = false;                      
    return function () {                      
        if (!wait) {                       
            func.apply(this, arguments);  
            wait = true;                  
            setTimeout(function () {          
                wait = false;         
            }, limit);
        }
    }
}
  function opThrottle(func, delay, { leading = false, trailing = true } = {}) {
    let fin = 0;
    let waiting = null;
    return function () {
        const now = +new Date();
        if (!fin && leading === false) {
            fin = now;
        }
        if (now - fin > delay) {
            if (waiting) {
                clearTimeout(waiting);
                waiting = null;
            }
            func.apply(this, arguments);
            fin = now;
        } else if (!waiting && trailing !== false) {
            waiting = setTimeout(() => {
                func.apply(this, arguments);
                fin = +new Date();
                waiting = null;
            }, delay);
        }
    };
}