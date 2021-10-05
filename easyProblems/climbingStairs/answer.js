/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let results = []
    results[0] = 1
    results[1] = 2
    if (n <= 2) {
        console.log(results[n-1])
        return results[n-1]
    }
    for (let i = 2; i < n; i++) {
        results[i] = 0
        for (let j = 1; j <= 2 && j <= i ; j++) {
            console.log("i, j, magic sauce", i, j, results[i], results[i - j], results[i] += results[i - j])
            results[i] += results[i - j]            
        }
    }
    console.log(results)
    return results[results.length-1]
};

// climbStairs(2)
climbStairs(3)
climbStairs(5)
