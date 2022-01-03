/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let trustTable = new Map()
    for (let i = 0; i < trust.length; i++) {
        if (trustTable.has(trust[i][0])) {
            trustTable.set(trust[i][0], trustTable.get(trust[i][0]).push(trust[i][1]))
        }
        trustTable.set(trust[i][0], trust[i][1])
    }
    console.log(trustTable)
};

// findJudge(2, [[1,2]])
findJudge(3, [[1,3],[2,3]])
// findJudge(3, [[1,3],[2,3],[3,1]])
findJudge(3, [[1,2],[2,3]])
findJudge(4, [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]])