const palindromes = function (string) {
    let [start, end] = [0, string.length - 1];
    for (let i = 0; i < string.length; i++) {
        if (string[start] !== string[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
