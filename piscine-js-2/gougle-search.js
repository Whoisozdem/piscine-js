const queryServers = async function(servername, q) {
    const url = '/' + servername + '?q=' + q;
    const saveurl = '/' + servername + '_backup?q=' + q;
    const req1 = getJSON(url);
    const req2 = getJSON(saveurl);
    const res = await Promise.race([req1, req2]);
    return res;
  }
  
  const gougleSearch = async function(q) {
    const timeout = new Promise(function(resolve) {
      setTimeout(resolve, 80, Error('timeout'));
    });
    const web = queryServers('web', q);
    const image = queryServers('image', q);
    const video = queryServers('video', q);
  
    const res = await Promise.race([timeout, Promise.all([web, image, video])]);
    if (res instanceof Error) {
      throw res;
    }
    return { image: res[1], video: res[2], web: res[0] };
  }
  