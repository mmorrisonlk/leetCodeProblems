/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function (nums, k) {
   let answer = true
   let tryAgain = 0
  if (nums.length < k) {
    console.log("Really?");
    answer = false
    return
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  function searcher() {
  let totalValue;
  let goal;
  let mapper = new Map();
  const reducer = (pretotalValue, curtotalValue) =>
    pretotalValue + curtotalValue;
  totalValue = nums.reduce(reducer);
  goal = totalValue / k;
  console.log("TotalValue/goal", totalValue, goal)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > goal) {
          console.log("Failure")
          answer = false
          return answer
      }
      if (nums[i] == goal) {
          continue
      }
    mapper.set(i, nums[i]);
  }
  while (mapper.size > 0) {
      let looper = mapper.keys();
      let key = looper.next().value
      let working = mapper.get(key)
      console.log("working", working)
      console.log(mapper, mapper.size);
      mapper.delete(key)
      let matcher = function(working) {
        let insideLooper = mapper.keys();
        let comboExtender = 0
        let runner = goal - working
        console.log("runner", runner)
        for (let i = 0; i < mapper.size; i++) {
          let insideKey = insideLooper.next().value
            console.log("key",insideKey)
            if (runner == mapper.get(insideKey)) {
                console.log(mapper, mapper.size);
                mapper.delete(insideKey)
                console.log("Pair Found")
                return
            }
            if (comboExtender == 0 && mapper.get(insideKey) < runner) {
                comboExtender = insideKey
            }
            if (runner != mapper.get(insideKey)) {
                continue
            }
        }
        if (comboExtender == 0) {
            console.log("No answer")
            answer = false
            return
        }
        console.log("combo extender", comboExtender)
        working += mapper.get(comboExtender)
        mapper.delete(comboExtender)
        matcher(working)
      }
      matcher(working)
  }
}
  searcher()
  while (answer == false && tryAgain < 3) {
    console.log("Did this work?")
    shuffleArray(nums)
    answer = true
    tryAgain++
    searcher()
  }
  console.log(answer)
  return answer
};
// canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
// canPartitionKSubsets([4,16,5,3,10,4,4,4,10], 3);
// canPartitionKSubsets([4,3,2], 4)
// canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 4);
// canPartitionKSubsets([1,1,1,1,2,2,2,2], 2)
canPartitionKSubsets([2,2,2,2,3,4,5], 4)
// canPartitionKSubsets([1,2,3,4], 3)
// canPartitionKSubsets([10,12,1,2,10,7,5,19,13,1], 4)
// canPartitionKSubsets([730,580,401,659,5524,405,1601,3,383,4391,4485,1024,1175,1100,2299,3908], 4)
canPartitionKSubsets([3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269], 5)