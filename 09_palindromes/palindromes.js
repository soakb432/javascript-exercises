const palindromes = function (word) {
    let cleanWord = word.toLowerCase()
        .split("")
        .filter(char => /[^\W_]/.test(char))
        .join("");

    let reversedWord = cleanWord.split("").reverse().join("");

    return cleanWord === reversedWord;

};

// Do not edit below this line
module.exports = palindromes;
