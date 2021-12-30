var smallestRepunitDivByK = function (k) {
    let count = 1;
    let n = 0;
    while (count <= k) {
        n = n * 10 + 1;
        n = n % k;      
        if (n === 0) return count;
        count++;
    }
    return -1;
};

smallestRepunitDivByK(3)

// borrowed from https://leetcode.com/problems/smallest-integer-divisible-by-k/discuss/1656632/JavaScript-1015.-Smallest-Integer-Divisible-by-K