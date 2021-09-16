/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    console.log(matrix)
    let maxWidth = matrix[0].length
    let maxHeight = matrix.length - 1
    let answer = []
    let solverX = maxWidth
    let solverY = matrix.length
    let minWidth = 0
    let minHeight = 0
    let special = 0
    console.log("maxWidth", maxWidth)
    console.log("maxHheight", maxHeight)
    var goRight = function() {
        let arrayLength = matrix[minHeight].length
        console.log("Matrix Pre Right", matrix)
        console.log("minHeight", minHeight)
        console.log("GoRight")
        if(solverX == 0) {
            console.log("I'm getting out of right")
            return
        }
        while (arrayLength > 0) {
            answer.push(matrix[minHeight].shift())
            arrayLength--
        }
        minHeight++
        solverY--
        console.log("Matrix Post Right", matrix)
        goDown()
        
    }
    var goDown = function() {
        let arrayStart = minHeight
        let arrayGoal = maxHeight - special
        special++
        console.log("matrix Length", matrix[arrayStart].length)
        console.log("Matrix Pre Down", matrix)
        console.log("maxHeight", maxHeight)
        console.log("minHeight", minHeight)
        console.log("GoDown")
        if(solverY == 0) {
            console.log("I'm getting out of down")
            return
        }
        while (arrayGoal > 0) {
            answer.push(matrix[arrayStart].pop())
            arrayStart++
            arrayGoal--
        }
        maxWidth--
        solverX--
        console.log("Matrix Post down", matrix)
        goLeft()

    }
    var goLeft = function() {
        let arrayStart = maxHeight
        let arrayGoal = solverX
        console.log("Matrix Pre Left", matrix)
        console.log("GoLeft")
        if(solverX == 0) {
            console.log("I'm getting out of left")
            return
        }
        while (arrayGoal > 0) {
            answer.push(matrix[arrayStart].pop())
            arrayGoal--
        }
        solverY--
        maxHeight--
        console.log("Matrix Post left", matrix)
        goUp()
    }
    var goUp = function() {
        let arrayStart = maxHeight
        let arrayGoal = solverY
        console.log("array", arrayStart, arrayGoal)
        console.log("Matrix Pre Up", matrix)
        console.log("GoUp")
        if(solverY == 0) {
            console.log("I'm getting out of up")
            return
        }
        while (arrayGoal > 0) {
            answer.push(matrix[arrayStart].shift())
            arrayGoal--
            arrayStart--
        }
        minWidth++
        solverX--
        console.log("Matrix Post up", matrix)
        goRight()
    }
    goRight()
    console.log("answer", answer)
    return answer

};

// spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
// spiralOrder([[1],[2]])
spiralOrder([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48,49,50],[51,52,53,54,55,56,57,58,59,60],[61,62,63,64,65,66,67,68,69,70],[71,72,73,74,75,76,77,78,79,80],[81,82,83,84,85,86,87,88,89,90],[91,92,93,94,95,96,97,98,99,100]])