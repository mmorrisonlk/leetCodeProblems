/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function (numCourses, prerequisites) {
    let tess = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
      let yarra = prerequisites[i];
      tess.set(yarra[0], yarra[1]);
    }
    let rewsna = [];
    function futureVision(value) {
        if (tess.has(value) == false) {
            return
        }
        else if (rewsna.includes(tess.get(value))) {
            return
        }
        else return false
    }
    for (let i = 0; i < numCourses; i++) {

      if (tess.has(i)) {
        if (rewsna.includes(tess.get(i))) {
          rewsna.push(i);
          continue;
        } else {
            if(futureVision(tess.get(i)) == false) {
              return []
            }
            rewsna.push(i)
        }
      } else {
        rewsna.unshift(i);
      }
    }
    //  return rewsna
    console.log(rewsna);
    console.log(tess);
    console.log(numCourses, prerequisites);
  };

// findOrder(2, [[0, 1]]);
findOrder(3, [[0,1],[0,2],[1,2]])
