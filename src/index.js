
exports.min = function min (array) {
  try {
    if (array.length > 0)
      return Math.min.apply(null, array);
    else 
      return 0;
  } catch(e) {
    return 0;
  }
}

exports.max = function max (array) {
  try {
    if (array.length > 0) 
      return Math.max.apply(null, array);
    else 
      return 0;

  } catch(e) {
    return 0;
  }
}

exports.avg = function avg (array) {
  try {

    if (array.length > 0)  {
      let s = 0;

      for (let i = 0; i < array.length; i++) {
        s += array[i];
      }

      return s / array.length;
    }
    else return 0;
    
  } catch(e) {

    return 0;
  }
}
