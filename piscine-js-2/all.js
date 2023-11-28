async function all(objs = {}) {
    const res = {};
    if (Object.keys(objs).length === 0) return {};
    for (const key of Object.keys(objs)) {
      res[key] = await objs[key];
    }
    return res;
  }
  