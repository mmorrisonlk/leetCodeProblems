/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {

    if (nums[start] == target) {
        return 0;
    }
    let i = start + 1
    let j = start - 1
    let answer

    function search(i, j) {
        if (nums[i] == target) {
            answer = Math.abs(i - start)
            console.log("The answer", answer)
            return answer
        }
        else if (nums[j] == target) {
            answer = Math.abs(j - start)
            return answer
        }
        else {
            i++
            j--
            search(i,j)
        }
    }
    search(i,j)
    return answer
};

getMinDistance([1,2,3,4,5], 5, 3)