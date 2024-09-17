const reverseString = function(string) {
  let text = string.split(""); // array
  let reverseString = "";
  
  while (text.length) {
    reverseString += text.pop(); // concatenate text in reverse
  }

  return reverseString;
  // "solution" --> return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
