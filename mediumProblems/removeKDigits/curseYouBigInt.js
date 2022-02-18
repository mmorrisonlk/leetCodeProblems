var removeKdigits = function(num, k) {
    let answerValue = 0
    let digitsToRemove = k

    if(num.length === k) {
        // console.log(answerValue)
        return answerValue.toString()
    }

    function testValueRemoval(currentString, currentIntLength) {
        // console.log(currentString)
        let currentLowest = parseInt(currentString)
        for (let i = 0; i < currentIntLength; i++) {
            let testValue = parseInt(currentString.substring(0, i).concat(currentString.substring(i+1)))
            if (testValue < currentLowest) {
                currentLowest = testValue
            }
        }
        newString = currentLowest.toString()
        reseter(newString)
    }

    function reseter(inputString) {
        console.log(inputString.length)
        digitsToRemove--
        if (digitsToRemove >= inputString.length) {
            answerValue = "0"
            return
        }
        if (digitsToRemove === 0) {
            answerValue = inputString
            return
        }
        else {
            testValueRemoval(inputString, inputString.length)
        }
        
    }

    testValueRemoval(num, num.length)

    // console.log(answerValue)
    return answerValue
};

removeKdigits("1432219", 3)
removeKdigits("10200", 1)
removeKdigits("10", 2)
removeKdigits("10001", 4)