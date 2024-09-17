const removeFromArray = function(array, ...num) {
  let index;

  for (const n of num) { // rest parameter
    index = array.indexOf(n);
    array.splice(index, 1);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
