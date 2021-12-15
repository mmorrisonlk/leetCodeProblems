/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let counter = 0
    let precedingSpace = false
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == " ") {
            precedingSpace = true
        }
        if (precedingSpace == false && s.charAt(i) != " ") {
            counter++
        }
        if (precedingSpace == true && s.charAt(i) != " ") {
            precedingSpace = false
            counter = 1
        }
    }
    return counter
};

lengthOfLastWord("Hello World")