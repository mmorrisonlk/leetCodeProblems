/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    let array = nums
    array.sort(function(a, b) {return a-b})
    array.reverse()
    console.log(array)
  let answer = true;
  if (array.length < k) {
    console.log("Really?");
    answer = false;
    return answer;
  }
  let totalValue;
  let goal;
  let mapper = new Map();
  let setter = new Set();
  const reducer = (pretotalValue, curtotalValue) =>
    pretotalValue + curtotalValue;
  totalValue = array.reduce(reducer);
  goal = totalValue / k;
  console.log("What number do we need", totalValue, goal);
  for (let i = 0; i < array.length; i++) {
    if (array[i] > goal) {
      console.log("Failure");
      answer = false;
      return answer;
    }
    if (array[i] == goal) {
      continue;
    }
    mapper.set(i, array[i]);
    setter.add(array[i])
  }
  console.log("mapper/setter", mapper, setter)
  console.log("answer", answer);
  return answer;
};
// canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
// canPartitionKSubsets([4,16,5,3,10,4,4,4,10], 3);
// canPartitionKSubsets([4,3,2], 4)
// canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 4);
// canPartitionKSubsets([1,1,1,1,2,2,2,2], 2)
// canPartitionKSubsets([2,2,2,2,3,4,5], 4)
// canPartitionKSubsets([1,2,3,4], 3)
canPartitionKSubsets([10, 12, 1, 2, 10, 7, 5, 19, 13, 1], 4);
