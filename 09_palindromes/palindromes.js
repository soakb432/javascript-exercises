const palindromes = function (word) {
    word = word.split("")
        .filter(char => /[^\W_]/.test(char))
        .join();
    
    let [start, end] = [0, word.length - 1];
    
    for (let i = 0; i < word.length; i++) {
        if (word[start] !== word[end]) {
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
