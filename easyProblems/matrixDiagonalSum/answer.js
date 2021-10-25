/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
     let end = mat.length - 1
     let answer = 0

     for (let i = 0; i < matlength; i++) {
         answer += mat[i][i]
         if (i != end) {
             answer += mat[i][end]
         }
         end--
     }

     return answer

};

diagonalSum([[1,2,3],[4,5,6],[7,8,9]])