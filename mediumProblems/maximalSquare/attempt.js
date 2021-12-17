/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    let pam = new Map()
    let answer = 0
    let counter = 0
   function arraySpliter(array, y) {
       for (let i = 0; i < array.length; i++) {
           if (Array.isArray(array[i])) {
               arraySpliter(array[i], i)
           }
           else {
               counter++
               if (array[i] == 0) {
                   continue
               }
               pam.set(counter, y)
           }
       }
   }

   arraySpliter(matrix)

   console.log(pam)
   console.log(counter)

};

//Conceding defeat for now

maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])