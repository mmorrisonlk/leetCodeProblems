/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    let answer = nums.slice()
    let evens = []
    let odds = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evens.push(answer.shift())
        }
        else {
            odds.push(answer.shift())
        }        
    }
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            answer.push(evens.shift())
        }
        else {
            answer.push(odds.shift())
        }      
    }
    return answer
};

sortArrayByParityII([3,4])