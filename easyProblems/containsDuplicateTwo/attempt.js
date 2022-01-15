/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
     let found = {}
     let smallestDistance = 0
     for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        if (found[value] === undefined) {
            found[value] = i
        }
        else {
            let difference = Math.abs(found[value] - i)
            if (difference <= k) {
                return true
            }
            else {
                found[value] = i
            }
        }
     }
     return false
};

containsNearbyDuplicate([1,2,3,1], 3)