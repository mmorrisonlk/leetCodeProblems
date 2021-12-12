/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let alpha = 0
    let alpharius = nums[alpha]
    let omega = nums.length - 1
    let omegaron = nums[omega]
    let length = nums.length
    console.log(nums[alpha], nums[omega])

    function findHim(position, perimeter) {
        if(position !== perimeter - 1) {
            findHim(position, perimeter - 1)
        }
        let v = []
        for (let i = position; i < nums.length; i++) {
            if (position == omega) {
                continue
            }
            v.push(nums[i])
        }
        console.log(v)
        
    }

    findHim(alpha, length)
};

canPartition([1,5,11,5])

// canPartition([1,2,3,5])