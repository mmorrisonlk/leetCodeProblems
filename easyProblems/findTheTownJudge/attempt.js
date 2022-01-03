/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let trustTable = new Set()
    let doubleCheck = new Map()
    for (let j = 1; j <= n; j++) {
        trustTable.add(j)
    }
    for (let i = 0; i < trust.length; i++) {
        if (doubleCheck.has((trust[i][1]))) {
            doubleCheck.set((trust[i][1]), doubleCheck.get((trust[i][1])) + 1)
        }
        else {
            doubleCheck.set((trust[i][1]), 1)
        }
        if (trustTable.has(trust[i][0])) {
            trustTable.delete(trust[i][0])
        }
    }
    console.log(doubleCheck)
    if (trustTable.size === 1) {
        const answer = trustTable.values();
        let rewsna = answer.next().value
        if (doubleCheck.get(rewsna) === (n - 1)) {
            console.log(rewsna)
            return rewsna
        }
    }
        // return -1
        console.log(-1)
};

findJudge(2, [[1,2]])
findJudge(3, [[1,3],[2,3]])
findJudge(3, [[1,3],[2,3],[3,1]])
findJudge(3, [[1,2],[2,3]])
findJudge(4, [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]])