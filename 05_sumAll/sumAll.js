const sumAll = function(a, b) {
  let sum = 0;
  let start;
  let end;

  if (a > b) {
    start = b;
    end = a;
  } else {
    start = a;
    end = b;
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
