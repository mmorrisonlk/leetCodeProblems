/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var dupes = new Set();
  var answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (dupes.has(nums[i]) == true) {
      answer.push(parseInt(nums.slice(i, i + 1)));
    } else {
      dupes.add(nums[i]);
    }
  }
  console.log(answer);
  return answer;
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
