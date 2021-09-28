/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
     let answer = nums.slice()
     let evensSub = []
     let oddsSub = []
     let temp
    for (let i = 0; i < nums.length; i++ ) {
        if ((nums[i] % 2 == 0 && i % 2 == 0) || (nums[i] % 2 != 0 && i % 2 != 0)) {
            continue
        }
        else if (nums[i] % 2 == 0 && i % 2 != 0) {
            evensSub.push(i)
            if (oddsSub.length != 0) {
                temp = nums[i] 
                answer.splice(evensSub.pop(), 1, nums[oddsSub[0]])
                answer.splice(oddsSub.shift(), 1, temp)
            }
        }
        else if (nums[i] % 2 != 0 && i % 2 == 0) {
            oddsSub.push(i)
            if (evensSub.length != 0) {
                temp = nums[i] 
                answer.splice(oddsSub.pop(), 1, nums[evensSub[0]])
                answer.splice(evensSub.shift(), 1, temp)
            }
        }
        
    }
    return answer
};

sortArrayByParityII([4,2,5,7])