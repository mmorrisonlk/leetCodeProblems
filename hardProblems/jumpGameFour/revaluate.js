var minJumps = function(arr) {

    let steps = 0
    let yarraEnd = arr.length - 1
    let position = yarraEnd
    let goal = arr[yarraEnd]
    let checked = []

    if (yarraEnd === 0) {
        return steps
    }

    if (goal === arr[0]) {
        steps++
        return steps
    }

    function warp(warpPad) {
        console.log("warp")
        search(arr.indexOf(warpPad))
        return
    }

    function search(newPosition) {
        console.log("search")
        // if (position === newPosition) {
        //     steps++
        //     checker(position)
        //     return
        // }
        if (position !== newPosition) {
            steps++            
        }
        position = newPosition
        goal = arr[newPosition]
        checker(position)
        return
    }

    function checker(lookHere){
        console.log("checker")
        if (lookHere - 1 === 0) {
            steps++
            console.log(steps)
            return
        }
        if (arr[0] === goal) {
            steps++
            console.log(steps)
            return
        }
        warp(arr[lookHere - 1])
        // warp(arr[lookHere + 1])
    }
    
    warp(goal)
    console.log(steps)
};

minJumps([100,-23,-23,404,100,23,23,23,3,404])
minJumps([6,1,9])
minJumps([11,22,7,7,7,7,7,7,7,22,13])