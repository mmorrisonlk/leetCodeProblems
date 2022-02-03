/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    /*
    Time complexity: O(N^2)
    Idea is to calculate all possible pairs between nums1 and nums2 and store
    their reciprocal (0 - sum) in a hashmap. Then for all pairs of nums3 and nums4,
    check whether the sum is in the hashmap and then add all the counts into a variable.
    */
    
    const map = new Map();
   
    // Placing the reciprocal of all pairs of n1 and n2 in the map   
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const reciprocalSum = -1 * (n1 + n2);
            map.set(reciprocalSum, (map.get(reciprocalSum) || 0) + 1);
        }
    }
    
    let res = 0;
    
    // Count the number of pairs that add up to 0
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const sum = n3 + n4;
            if (map.has(sum)) res += map.get(sum);
        }
    }
    
    return res;
    
};

// Stolen from https://leetcode.com/problems/4sum-ii/discuss/1740640/JavaScript-commented-O(N2)

fourSumCount([1,2], [-2,-1], [-1,2], [0,2])

/*
2, -2, 0, 0
2, -1, -1, 0
2, 2, -4, 0
*/