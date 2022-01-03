/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let trustTable = new Set()
    let doubleCheck = new Set()
    for (let j = 1; j <= n; j++) {
        trustTable.add(j)
    }
    for (let i = 0; i < trust.length; i++) {
        if (trustTable.has(trust[i][0])) {
            trustTable.delete(trust[i][0])
            doubleCheck.add(trust[i][1])
        }
    }
    console.log(doubleCheck)
    if (trustTable.size === 1 && doubleCheck.size <= 1) {
        const answer = trustTable.values();
        // return answer.next().value
        console.log(answer.next().value)
    }
    else {
        // return -1
        console.log(-1)
    }
};

// findJudge(2, [[1,2]])
findJudge(3, [[1,3],[2,3]])
// findJudge(3, [[1,3],[2,3],[3,1]])
findJudge(3, [[1,2],[2,3]])
findJudge(4, [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]])