/**
 * @param {number} k
 * @return {number}
 */
 var smallestRepunitDivByK = function(k) {
    let value = 0
    let count = 1
    do {
        value = value * 10 + 1
        value = value % k
        if (value === 0) {
            return count
        }
        count++
    }
    while (count <= k);
    
    return -1
};

smallestRepunitDivByK(18)