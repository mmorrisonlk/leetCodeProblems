/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    var oneRepeats = 0
    var mostOnes = 0
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums[i] == 1) {
            console.log("Ole", nums[i])
            mostOnes++
            console.log("Ole", mostOnes)
        }
        else {
            console.log("Zed", nums[i])
            console.log("Zed", mostOnes)
            if (oneRepeats == 0) {
                oneRepeats = mostOnes
                mostOnes = 0
            }
            if (oneRepeats < mostOnes) {
                oneRepeats = mostOnes
                mostOnes = 0
            }
            else {
                mostOnes = 0
            }
        } 
    }
    console.log(oneRepeats)
    return oneRepeats
};

findMaxConsecutiveOnes([1,1,0,1,1,1])