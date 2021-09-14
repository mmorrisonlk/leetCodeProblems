/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     // check to make sure it isn't jus the obvious answer
     if (nums.length == 2) {
         console.log([0,1])
     }
     // stores the final indexs
     let final =[]
     // double for loop that checks one value against every other value other then itself and then returns the indexes when it finds the answer
     for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                console.log("skip")
            }
            else{
                if (nums[i] + nums[j] == target) {
                    console.log("here", i)
                    console.log("there", j)
                final.push(i)
                final.push(j)
                console.log("final", final)
                return
                }
            }
        }
         
     }
    console.log(final)
    console.log(nums, target)
    console.log("general kenobi")
};

twoSum([2,7,11,15], 9)