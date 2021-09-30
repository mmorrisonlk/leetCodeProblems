/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let array = nums;
  if (nums.length < k) {
    console.log("Really?");
    return false;
  }
  let totalValue;
  let goal;
  let goalCounter = 0;
  let failure;
  let hunter = 0;
  let mapper = new Map();
  const reducer = (pretotalValue, curtotalValue) =>
    pretotalValue + curtotalValue;
  totalValue = nums.reduce(reducer);
  goal = totalValue / k;
  console.log("goal, totalvalue", goal, totalValue)
  while (goalCounter < k) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > goal) {
        console.log("false too big");
        return false;
      }
      console.log(mapper);
      if ((hunter != 0 && mapper.includes(i) == false)) {
          console.log(i)
        if (hunter + array[i] == goal) {
          console.log("Add and match");
          goalCounter++;
          mapper.push(i);
          hunter = 0;
          continue;
        }
        if (hunter + array[i] < goal) {
          console.log(hunter + array[i]);
          console.log("Add and Search");
          hunter += array[i];
          console.log(hunter);
          mapper.push(i);
          continue;
        }
        if (hunter + array[i] > goal) {
          console.log("Too Large");
          continue;
        }
      } else if (hunter == 0 && mapper.includes(i) == false) {
        if (array[i] == goal) {
          console.log("straight to goal");
          goalCounter++;
          mapper.push(i);
          hunter = 0;
          continue;
        }
        if (array[i] < goal) {
          console.log("too small adding");
          hunter = array[i];
          mapper.push(i);
          continue;
        }
      }
    }
    if (failure == goalCounter) {
      console.log("false fail state");
      return false;
    }
    failure = goalCounter;
  }
  console.log("True Why are we here?");
  return true;
};

// canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
// canPartitionKSubsets([4,3,2], 4)
canPartitionKSubsets([1,1,1,1,2,2,2,2], 4)
