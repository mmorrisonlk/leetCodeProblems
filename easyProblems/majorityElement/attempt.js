var majorityElement = function(nums) {
    let midpoint = Math.floor(nums.length / 2)
    nums.sort()
    return nums[midpoint]
};

majorityElement([3,2,3])