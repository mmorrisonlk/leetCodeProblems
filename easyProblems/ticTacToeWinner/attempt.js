/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
     if (moves.length <= 4) {
         console.log("Pending")
         return "Pending"
     }
     let length = moves.length
     let evens = []
     let odds = []
     for (let i = 0; i < length; i++) {
        if (i % 2 == 0) {
            console.log("even", i)
            evens.push(moves.shift())
        }
        else {
            console.log("odd", i)
            odds.push(moves.shift())
        }
     }
     var winner = function(chosen, zedOle) {
         let vertOne = 0
         let vertTwo = 0
         let vertThree = 0
         let horizOne = 0
         let horizTwo = 0
         let horizThree = 0
         let diagDown = 0
         let diagUp = 0
     for (let j = 0; j < chosen.length; j++) {
         console.log(JSON.stringify(chosen[j]))
        switch (JSON.stringify(chosen[j])) {
            case "[0,0]" :
                vertOne++
                horizOne++
                diagDown++
                break;
            case "[0,1]" :
                horizOne++
                vertTwo++
                break;
            case "[0,2]" :
                horizOne++
                vertThree++
                diagUp++
                break;
            case "[1,0]" :
                horizTwo++
                vertOne++
                break;
            case "[1,1]" :
                horizTwo++
                vertTwo++
                diagDown++
                diagUp++
                break;
            case "[1,2]" :
                horizTwo++
                vertThree++
                break;
            case "[2,0]" :
                horizThree++
                vertOne++
                diagUp++
                break;
            case "[2,1]" :
                horizThree++
                vertTwo++
                break;
            case "[2,2]" :
                horizThree++
                vertThree++
                diagDown++
                break;
            default:
                break;
        }
    }
    console.log(vertOne, vertTwo, vertThree, horizOne, horizTwo, horizThree, diagDown, diagUp)
    if (vertOne == 3 || vertTwo == 3 || vertThree == 3 || horizOne == 3 || horizTwo == 3 || horizThree == 3 || diagDown == 3 || diagUp == 3) {
        console.log("You win!!")
        return (true)
    }
    else {
        return (false)
    }
    }
    if(winner(evens, "Zed") == true) {
        console.log("Zed Wins")
        return "A"
    }
    if(winner(odds, "Ole") == true) {
        console.log("Ole Wins")
        return "B"
    }
    if(length == 9) {
        console.log("Draw")
        return "Draw"
    }
    else {
        console.log("Pending")
        return "Pending"
    }
};

tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])

// Needs to return "A" or "B" for the respective winner, "Draw", or "Pending" if there isn't currently a winner
// I could generate an empty actual tic tac matrix since I already have the basic coordinates. Would that be useful?
// I could probably check the array length to quickly eliminate draw cases where it isn't possible for there to be a winner yet

/*
XXX
XXX
XXX
*/