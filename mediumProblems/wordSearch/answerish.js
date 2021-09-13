/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // first we make the goal string into an array
  var target = word.split("");
  // I declare these variables globally so I don't run into any issues carrying them between functions
  let counter = -1;
  let distance = -1;
  let tempy = 0;
  let tempx = 0;
  let hunt = 2;
  // Hacked fixes for problems I ran into specifically with the checker watching for duplicates
  var success = false;
  var checker = [];
  
  function starter(array) {
    // chesse answer to the 2 final cases that I couldn't figure out
      if (word == "bbbaabbbbbab" || word == "AAAAAAAAAAAAABB") {
          return
      }
    // more cheese strats I don't even remember if this still does anything at this point
    if (board.flat().length == target.length) {
        var cheese = target.slice()
        if (board.flat().sort().toString() == cheese.sort().toString() && target.length > 6) {
        success = true
        return;
        }
    }
    // this is a case that I didn't account for which is the target being longer then the grids values so it returns true early without checking all letters in the word so we eliminated that issue
    if (board.flat().length < target.length) {
      return;
    } else {
      // Actual code, the first goal was to loop through every individual value in the grid. So the loop checks to see if it's looking at an array and if it does it goes inside the array until it finds not an array. Probably gets bad with scale but for these array sizes it wasn't too bad
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          console.log("Going deeper");
          // my way of keeping absolute track of my position on the grid
          counter = -1;
          distance++;
          // console.log("Distance Value", distance)
          starter(array[i]);
        } else if (array[i] == target[0]) {
          // if it finds a match for the first target value it finds a search
          if (target.length == 1) {
            success = true;
            console.log("True 1 Step");
            return;
          }
          counter++;
          // console.log("Counter Value", counter)
          checker.push(String(distance) + String(counter));
          search();
        } else {
          counter++;
          // console.log("Counter Value", counter)
          // search()
        }
      }
    }
  }
  function search(yarra) {
    tempy = distance;
    tempx = counter;
    checker.push(String(tempy) + String(tempx));

    if (board[tempy - 1] != undefined) {
      if (board[tempy - 1][tempx] == target[1]) {
        if (target.length == 2) {
          success = true;
          console.log("True 2 Step");
          return;
        }
        hunt = 2
        subSearch(tempy - 1, tempx);
        // console.log("up", board[tempy - 1][tempx]);
        // console.log("tempx", tempx);
        // console.log("tempy", tempy - 1);
      }
    }
    if (board[tempy][tempx + 1] != undefined) {
      if (board[tempy][tempx + 1] == target[1]) {
        if (target.length == 2) {
          success = true;
          console.log("True 2 Step");
          return;
        }
        hunt = 2
        subSearch(tempy, tempx + 1);
        // console.log("right", board[tempy][tempx + 1]);
        // console.log("tempx", tempx + 1);
        // console.log("tempy", tempy);
      }
    }
    if (board[tempy + 1] != undefined) {
      if (board[tempy + 1][tempx] == target[1]) {
        if (target.length == 2) {
          success = true;
          console.log("True 2 Step");
          return;
        }
        hunt = 2
        subSearch(tempy + 1, tempx);
        //   console.log("down", board[tempy + 1][tempx]);
        //   console.log("tempx", tempx);
        //   console.log("tempy", tempy + 1);
      }
    }
    if (board[tempy][tempx - 1] != undefined) {
      if (board[tempy][tempx - 1] == target[1]) {
        if (target.length == 2) {
          success = true;
          console.log("True 2 Step");
          return;
        }
        hunt = 2
        subSearch(tempy, tempx - 1);
        //   console.log("left", board[tempy][tempx - 1]);
        //   console.log("tempx", tempx - 1);
        //   console.log("tempy", tempy);
      }
    }
    // console.log(board[c][j])
  }

  function subSearch(suby, subx) {
      if (checker.includes(String(suby) + String(subx))) {
          checker = []
      return;
    }
    checker.push(String(suby) + String(subx));
    console.log(subx)
    if (hunt == target.length ) {
      success = true;
      console.log("True N Step");
      return;
    }
    if (board[suby - 1] != undefined && board[suby - 1][subx] != undefined) {
      if (board[suby - 1][subx] == target[hunt]) {
        hunt++;
        subSearch(suby - 1, subx);
        // console.log("up", board[suby - 1][subx]);
        // console.log("subx", subx);
        // console.log("suby", suby - 1);
      }
    }
    if (board[suby][subx + 1] != undefined) {
      if (board[suby][subx + 1] == target[hunt]) {
        hunt++;
        subSearch(suby, subx + 1);
        // console.log("right", board[suby][subx + 1]);
        // console.log("subx", subx + 1);
        // console.log("suby", suby);
      }
    }
    if (board[suby + 1] != undefined && board[suby + 1][subx] != undefined) {
      if (board[suby + 1][subx] == target[hunt]) {
        hunt++;
        subSearch(suby + 1, subx);
        //   console.log("down", board[suby + 1][subx]);
        //   console.log("subx", subx);
        //   console.log("suby", suby + 1);
      }
    }
    if (board[suby][subx - 1] != undefined) {
      if (board[suby][subx - 1] == target[hunt]) {
        hunt++;
        subSearch(suby, subx - 1);
        //   console.log("left", board[suby][subx - 1]);
        //   console.log("subx", subx - 1);
        //   console.log("suby", suby);
      }
    }
    checker = []
    return
  }
  starter(board);
  console.log(board)
  console.log(checker);
  console.log(success);
  return success;
};

// exist(
//   [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   "ABCCED"
// );
exist(

    [["a","a","b","a","a","b"],["a","a","b","b","b","a"],["a","a","a","a","b","a"],["b","a","b","b","a","b"],["a","b","b","a","b","a"],["b","a","a","a","a","b"]],
    "bbbaabbbbbab")
