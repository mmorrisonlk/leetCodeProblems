/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let dupes = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (dupes.has(nums[i])) {
            nums.splice(i, 1)
            i--
        }
        else{
        dupes.add(nums[i])
        }
    }
    return nums.length
};

// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != nums[i]) 
//             nums[++i] = nums[j];
//     }
//     return ++i;
// };
// Not my solution found https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/248020/My-easy-Javascript-Solution so I could see why mine wasn't very quick

removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
