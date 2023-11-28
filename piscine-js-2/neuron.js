function neuron(arr) {
    var res = {};
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i].split(' ');
      if (/questions:/i.test(str[0])) {
        res['questions'] ||= {};
        let [question, response] = separatequest(str);
        let newquest = question
          .replaceAll(' ', '_')
          .replace('?', '')
          .toLowerCase();
        res['questions'][newquest] ||= {};
        res['questions'][newquest]['question'] = question;
        res['questions'][newquest]['responses'] ||= [];
        res['questions'][newquest]['responses'].push(response);
      } else if (/orders:/i.test(str[0])) {
        let [order, response] = separatequest(str);
        res['orders'] ||= {};
        let neword = order
          .replaceAll(' ', '_')
          .replace('!', '')
          .toLowerCase();
        res['orders'][neword] ||= {};
        res['orders'][neword]['order'] = order;
        res['orders'][neword]['responses'] ||= [];
        res['orders'][neword]['responses'].push(response);
      } else if (/affirmations:/i.test(str[0])) {
        let [affirmation, response] = separateaff(str);
        res['affirmations'] ||= {};
        let newaff = affirmation.replaceAll(' ', '_').toLowerCase();
        res['affirmations'][newaff] ||= {};
        res['affirmations'][newaff]['affirmation'] = affirmation;
        res['affirmations'][newaff]['responses'] ||= [];
        res['affirmations'][newaff]['responses'].push(response);
      }
    }
    return res;
  }
  
  function separatequest(arr) {
    let words = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = arr
      .join(' ')
      .split('-')
      .slice(1)
      .join('-')
      .slice(1)
      .split(' ')
      .slice(1)
      .join(' ');
    return [words, response];
  }
  
  function separateaff(arr) {
    let words = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = arr
      .join(' ')
      .split('-')[1]
      .slice(1)
      .split(' ')
      .slice(1)
      .join(' ');
    return [words, response];
  }
