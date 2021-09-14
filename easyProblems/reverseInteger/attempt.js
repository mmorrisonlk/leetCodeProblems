/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
     var array = Array.from(String(x), Number);
     var yarra = []
     console.log(array)
     while (array.length!= 0) {
        yarra.push(array.pop())
     }
     if (isNaN(yarra[yarra.length-1]) == true) {
        console.log("Who let me do this?")
        yarra.pop()
        let answer = (yarra.join("") * -1)
        console.log(answer)
        if (answer > -2147483648) {
            return answer
        }
        else {return 0}
     }
     else {
        let answer = (yarra.join("") * 1)
        console.log(answer)
        if (answer > 2147483647) {
            return answer
        }
        else {return 0}
     }    
};

reverse(123)