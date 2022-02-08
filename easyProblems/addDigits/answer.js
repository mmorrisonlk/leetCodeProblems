/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {

    if (num < 10) {
        return num
    }

    let answer

    function downsize(currentValue) {
        let modulus
        let value = 0
        while (currentValue) {
            modulus = currentValue % 10
            value += modulus
            currentValue = Math.floor(currentValue / 10)
        }
        checkSum(value)
    }

    function checkSum(downsizedValue) {
        if (downsizedValue < 10) {
            answer = downsizedValue
            return
        } else {
            downsize(downsizedValue)
            return
        }
    }

    downsize(num)

    return answer

};

addDigits(38)
addDigits(0)