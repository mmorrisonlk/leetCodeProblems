/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let one = false;
  let maxTwo = false;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === nums[i] && !one) {
      one = true;
      continue;
    }
    else {
        if (nums[j] === nums[i] && !maxTwo) {
            console.log("Here")
          maxTwo = true
          nums[++i] = nums[j];
          continue;
        }
        if (nums[j] != nums[i]) {
            console.log("there")
          nums[++i] = nums[j];
          maxTwo = false
          continue;
        }
    }
  }
  return ++i;
};

// removeDuplicates([1, 1, 1, 2, 2, 3]);
removeDuplicates([0,0,1,1,1,1,2,3,3])
