/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {

    var firstSet = new Set()
    var secondSet = new Set()

    let answer = 0

    for (i = 0; i < text1.length; i++) {
        firstSet.add(text1.charAt(i))
    }
    for (i = 0; i < text2.length; i++) {
        secondSet.add(text2.charAt(i))
    }
    if (firstSet.size == 1 && secondSet.size == 1 && text1.charAt(0) == text2.charAt(0)) {
        if (text1.length < text2.length) {
            answer = text1.length 
            return answer
        }
        else {
            answer = text2.length
            return answer
        }
    }

    var setIterator = firstSet.values()
    var goalLetters = new Set()

    for (let i = 0; i < firstSet.size; i++) {
        var rightNow = setIterator.next().value
        if (secondSet.has(rightNow)) {
            goalLetters.add(rightNow)
        }        
    }

    let answer = 0
    let innerAnswer = 0

    var yFinder = function(x, y) {
        let target = x
        let looper = y
        console.log(target,looper)
        for (looper; looper < text2.length; looper++) {
            if (text2.charAt(looper) == text1.charAt(target)) {
                y = looper + 1
                innerAnswer++
                console.log("Here")
                xFinder(x + 1, looper + 1)
            }
            console.log("there")
        }
        if (innerAnswer > answer) {
            answer = innerAnswer
        }
        innerAnswer = 0
        return
    } 
    var xFinder = function(x, y) {
        let xenos = x
        let astartes = y
    for (xenos; xenos < text1.length; xenos++) {
        if (goalLetters.has(text1.charAt(xenos))) {
            console.log(text1.charAt(xenos))
            yFinder(xenos, astartes)
        }
    }
    // if (tempAnswer > answer) {
    //     answer = tempAnswer
    // }
}

    xFinder(0, 0)

    console.log(firstSet);
    console.log(secondSet);
    console.log(goalLetters);
    console.log("answer", answer);

    return answer
};

// longestCommonSubsequence("abcde", "ace")
// longestCommonSubsequence("abc", "acedb")
// longestCommonSubsequence("psnw", "vozsh")
// longestCommonSubsequence("ezupkr", "ubmrapg")
longestCommonSubsequence("bsbininm", "jmjkbkjkv")
// longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy");
// longestCommonSubsequence("bsbininm", "jmjkbkjkv")