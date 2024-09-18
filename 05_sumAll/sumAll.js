const sumAll = function(a, b) {
  let sum = 0;
  let start;
  let end;

  if ((!Number.isInteger(a) || !Number.isInteger(b)) || (a < 0 || b < 0)) {
    return "ERROR";
  }

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
