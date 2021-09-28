/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
     let answer = nums.slice()
     let evensSub = []
     let oddsSub = []
    for (let i = 0; i < nums.length; i++ ) {
        console.log(i, nums)
        if ((nums[i] % 2 == 0 && i % 2 == 0) || (nums[i] % 2 != 0 && i % 2 != 0)) {
            console.log("right")
            continue
        }
        else if (nums[i] % 2 == 0 && i % 2 != 0) {
            evensSub.push(nums[i])
            evensSub.push(i)
            if (oddsSub.length != 0) {
                answer.splice(parseInt(evensSub.splice(evensSub.indexOf(nums[i] + 1), 1)), 1, oddsSub.shift())
                answer.splice(oddsSub.shift(), 1, parseInt(evensSub.splice(evensSub.indexOf(i), 1)))
            }
        }
        else if (nums[i] % 2 != 0 && i % 2 == 0) {
            oddsSub.push(nums[i])
            oddsSub.push(i)
            if (evensSub.length != 0) {
                answer.splice(parseInt(oddsSub.splice(oddsSub.indexOf(nums[i] + 1), 1)), 1, evensSub.shift())
                answer.splice(evensSub.shift(), 1, parseInt(oddsSub.splice(oddsSub.indexOf(i), 1)))
            }
        }
        
    }
    console.log(answer)
    return answer
};

sortArrayByParityII([3,4])