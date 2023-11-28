const retry = (count, callback, t = 0) => async (...args) => {
    try {
      return await callback(...args);
    } catch (error) {
      if (t >= count) {
        throw new Error(`x:${args}`);
      }
      return retry(count, callback, t + 1)(...args);
    }
  };
  
  const timeout = (delay, callback) => async (...args) => {
    const prom = new Promise((resolve) => setTimeout(resolve, delay));
    try {
      const value = await Promise.race([callback(...args), prom]);
      if (!value) {
        throw new Error('timeout');
      }
      return value;
    } catch (error) {
      throw error;
    }
  };
  