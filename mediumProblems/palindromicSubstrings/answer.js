/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let array = s.split("")
    let answer = 0
    let segments = 2

    answer += array.length

    var slicer = function() {
        for (let i = 0; i < array.length; i++) {
            if (i + segments == array.length + 1) {
                break
            }
            let yarra = array.slice(i, i + segments)
            console.log("yarra", yarra)
            checker(yarra)
        }
        segments++
    }
    
    var checker = function(subString) {
        console.log("subString", subString)
        let j = 0
        let k = subString.length - 1
        while (j <= k) {
            console.log("checker while", j, k)
            if (subString[j] == subString[k]) {
                j++
                k--
                continue
            }
            else {
                return
            }
        }
        answer++
    }

    while (segments <= array.length) {
        slicer()
    }

    console.log("answer array", answer, array)
    return answer
    
};
countSubstrings("aaa")