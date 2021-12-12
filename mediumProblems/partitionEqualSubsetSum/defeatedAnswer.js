var canPartition = function(nums) {
    var sum = nums.reduce((a, b) => a + b);
    
    // if sum is odd then it is not divisible by two subset
    if(sum % 2 === 1) return false;
    
    var target = sum / 2;
    const N = nums.length
    
    //target 0 is always possible, by empty subset
    let m = {0: true}
    
    for (let i=0 ; i<N; i++) {
        Object.keys(m).forEach(e => {
            e = parseInt(e)
            
            //for every existing reachable target, add 2 permutation
            //by adding nums[i] and not adding nums[i]
            m[e + nums[i]] = true
            m[e] = true
        })
    }
    
    // m contains all possible target
    return m[target]? true: false
};

// stolen answer from here https://leetcode.com/problems/partition-equal-subset-sum/discuss/1594430/Easy-to-understand-(with-comment)-DP-solution I am a sham!!!