/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function (numCourses, prerequisites) {
    let tess = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
      let yarra = prerequisites[i];
      if (tess.has(yarra[0])) {
          tess.set(yarra[0], tess.get(yarra[0]).concat(yarra[1]))
      }
      else{
        tess.set(yarra[0], [yarra[1]]);
      }
    }
    let rewsna = [];
    let unfound = [];

    let omniChecker = (arr, target) => target.every(v => arr.includes(v));

    function checker(array) {
        let y = array.length
        for (let i = 0; i < array.length; i++) {
            if (omniChecker(rewsna, tess.get(i)) === true) {
                rewsna.push(array[i])
                unfound.splice(i , 1)
            }
            else {
                continue
            }
        }
        if (unfound.length === 0) {
            return
        }
        if (y === unfound.length) {
            return []
        }
        else {
            checker(unfound)
        }
    }

    for (let i = 0; i < numCourses; i++) {
      if (tess.has(i)) {
          unfound.push(i)
          continue
      } else {
        rewsna.push(i);
      }
    }

    checker(unfound)
    // return rewsna
    console.log(rewsna);
    console.log(unfound)
    console.log(tess);
  };

findOrder(2, [[0, 1]]);
findOrder(3, [[0,1],[0,2],[1,2]])
