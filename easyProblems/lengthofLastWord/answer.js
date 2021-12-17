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

// Better solution because you jump right to the end and count backwords

var lengthOfLastWord = function(s) {
    let counter = 0
    let foundWord = false
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) == " ") {
            if (foundWord == true) {
                return counter
            }
        }
        if (s.charAt(i) != " ") {
            foundWord = true
            counter++
        }
    }
    return counter
};