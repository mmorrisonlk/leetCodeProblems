/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
     let pam = new Map()
     let answer = 0
    function arraySpliter(array, y) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                arraySpliter(array[i], i)
            }
            else {
                if (array[i] == 0) {
                    continue
                }
                pam.set(`[${y}, ${i}]`, array[i])
            }
        }
    }

    function mapSearcher(xint, yant) {
        if (pam.has(`[${xint}, ${yant + 1}]`)) {
            
        }
    }

    arraySpliter(matrix)

    console.log(pam, pam.size)

    if (pam.size >= 1) {
        answer = 1
    }
    for (let i = 0; i < matrix.size; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (pam.has(`[${i}, ${j}]`)) {
                    mapSearcher(i, j)
                }
                
            }
    }


};

maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])