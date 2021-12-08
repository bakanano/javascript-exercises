const palindromes = function (string) {
    let newString = string.replace(/\W/g, "").toLowerCase()
    let wordArray = newString.split("");
    let reversedWord = wordArray.reverse().join("");
    return newString == reversedWord;


};

// Do not edit below this line
module.exports = palindromes;
