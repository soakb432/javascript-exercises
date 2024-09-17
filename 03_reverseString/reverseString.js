const reverseString = function(string) {
  let text = string.split(""); // array
  let reverseString = "";
  
  while (text.length) {
    reverseString += text.pop();
  }

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
