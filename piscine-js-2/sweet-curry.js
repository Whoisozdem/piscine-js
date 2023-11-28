function mult2(first) {
    return function(second){
        return first * second 
      };
}

function add3(first) {
    return function (second) {
      return function (third) {
        return first + second + third;
      };
    };
  }
  
  function sub4(first) {
    return function (second) {
      return function (third) {
        return function (forth) {
          return first - second - third - forth;
        };
      };
    };
  }