var minJumps = function(arr) {
    let position = 0
    let steps = 0
    let checked = []
    if (arr.length - 1 === position) {
        return steps
    }

    function downOne(currentSpot) {
        let minusOne = currentSpot - 1
        if (minusOne < 0) {
            return
        }
        else {
            checkAgain(minusOne)
        }
    }

    function upOne(currentSpot) {
        let plusOne = currentSpot + 1
        if (plusOne === arr.length - 1) {
            return steps
        }
        else {
            checkAgain(minusOne)
        }
    }

    function dupeJump(currentSpot) {
        
    }
    console.log(arr)
};

minJumps([100,-23,-23,404,100,23,23,23,3,404])