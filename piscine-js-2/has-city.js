function checkcity(city, cityarr) {

    for(var i = 0; i < cityarr.length; i++) {
    if (cityarr[i]== city) {
        return true;
        }
    }
    return false
}

function hasCity(country, cities) {
    return function(city) {
      if (checkcity(city, cities)) {
        return `${city} is a city from ${country}`;
      } else {
        return `${city} is not a city from ${country}`;
      }
    };
  }
  