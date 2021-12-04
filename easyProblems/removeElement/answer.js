/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length == 0) {
        return [];
    }
    if (nums.length == 1) {
        if (nums[0] == val) {
            return [];
        } else {
            return nums;
        }
    }
    if (nums.includes(val) == false) {
        return nums.length
    }
    if (nums.length == 2) {
        if (nums[0] == val) {
            nums.shift()
            if (nums[0] == val) {
                nums.shift()
            }
        }
        else {
            nums.pop()
        }
        return nums.length
    }
    for (let i = nums.length - 2; i >= 0;) {
        console.log("i", i)
        if (nums[i + 1] == undefined) {
            i--
            continue;
        }
        if (nums[i] == val && nums[i + 1] == val) {
            i--
            continue;
        } else if (nums[i] == val) {
            console.log("Single Match")
            nums[i] = nums[i + 1];
            nums[i + 1] = val;
            i = i + 1
        }
        else {
            console.log("Neither")
            i--
            continue;
        }
    }
    //   nums = nums.slice(0,nums.indexOf(val))
    //   return nums.length
    // return (nums.slice(0,nums.indexOf(val)))
    console.log(nums);
};

// removeElement([3,2,2,3], 3)
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// removeElement([2,2,3], 2)
