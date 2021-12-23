/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function (numCourses, prerequisites) {

    Tess = {}

    for (let i = 0; i < prerequisites.length; i++) {
      let yarra = prerequisites[i];
      if (Tess[yarra[0]] != undefined) {
        Tess[yarra[0]] = Tess[yarra[0]].concat(yarra[1])
      }
      else{
        Tess[yarra[0]] = [yarra[1]];
      }
    }

    let answer = new Set()

    let omniChecker = (arr, target) => target.every(v => arr.has(v));

    while (answer.size != numCourses) {
        let y = answer.size
        for (let j = 0; j < numCourses; j++) {
            if (Tess[j] != undefined && omniChecker(answer, Tess[j])) {
                answer.add(j)
                continue
            }
            else if (Tess[j] != undefined) {
                continue
            }
            else {
                answer.add(j)
            }
        }
        if (y === answer.size) {
            return []
        }
    }

    if (answer.size === numCourses) {
        return Array.from(answer)        
    }
    else {
        return []
    }

  };

// findOrder(2, [[1, 0]]);
// findOrder(3, [[0,1],[0,2],[1,2]])
findOrder(2, [[0,1],[1,0]])
