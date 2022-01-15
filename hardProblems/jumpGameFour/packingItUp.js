var minJumps = function(arr) {

    let steps = 0
    let position = arr.length - 1
    let currentValue = arr[position]
    let goal = arr[0]
    let found = false

    if (position === 0) {
        return steps
    }

    if (currentValue === goal) {
        steps++
        return steps
    }

    function warp(warpPad) {
        console.log("warpPad",warpPad)
        if(found) {
            return
        }
        let warpedTour = arr.indexOf(currentValue)
        console.log("warpedTour", warpedTour)
        if ( warpedTour === position){
            position = warpedTour - 1
            currentValue = arr[warpedTour - 1]
            checker(warpedTour-1)
            return
        }
        else {
            position = warpedTour
            currentValue = arr[warpedTour]
            checker(warpedTour)
            return
        }
    }

    function checker(lookHere){
        console.log("lookHere",lookHere)
        console.log("Current Value, Position", currentValue, position)
        if(found) {
            return
        }
        if (goal === currentValue) {
            steps++
            found = true
            return
        }
        if (lookHere - 1 === 0) {
            steps++
            found = true
            return
        }
        console.log(arr[(lookHere - 1)], arr[(lookHere + 1)], "Jump options")
        if (arr[lookHere - 1] === goal || arr[lookHere + 1] === goal){
            steps += 2
            found = true
            return
        }
        steps++
        warp(lookHere)
        // warp(lookHere + 1)
    }
    
    checker(position)
    return steps
};

// minJumps([100,-23,-23,404,100,23,23,23,3,404])
// minJumps([6,1,9])
// minJumps([11,22,7,7,7,7,7,7,7,22,13])
minJumps([-76,3,66,-32,64,2,-19,-8,-5,-93,80,-5,-76,-78,64,2,16])