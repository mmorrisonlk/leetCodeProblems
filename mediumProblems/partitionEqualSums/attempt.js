/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let array = nums 
  // array.sort(function(a, b) {return a-b})
  // array.reverse()
  let answer = true
  if (array.length < k) {
    console.log("Really?");
    answer = false
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
  let howClose = k
  let failcase = k + 1
  console.log("What number do we need", totalValue, goal)
  for (let i = 1; i < array.length + 1; i++) {
      if (array[i] > goal) {
          console.log("Failure")
          answer = false
          return answer
      }
      if (array[i] == goal) {
          howClose--
          continue
      }
    mapper.set(i, array[i]);
  }
  // const valueLooper = mapper.values();
  const keysLooper = mapper.keys();
  // console.log(valueLooper, keysLooper)
  for (let i = 0; i < mapper.size; i++) {
    let yo = i
    let testing = mapper.get(i)
    console.log("Testing", testing)
    for(let j = 1; j < mapper.size; j++) {
      if (testing + mapper.get(j) == goal) {
        setter.add(yo,j)
      }
  }
  console.log(setter)
}
  // while (failcase > 0 || howClose > 0) {
  //     console.log("working", working)
  //     console.log(mapper, mapper.size);
  //     let matcher = function(worker) {
  //         console.log("worker", worker)
  //       const looper = mapper.values();
  //       let runner = goal - worker
  //       console.log("runner", runner)
  //       for (let i = 0; i < mapper.size; i++) {
  //           let key = looper.next().value
  //           console.log("key",key)
  //           if (runner == mapper.get(key)) {
  //               console.log(mapper, mapper.size);
  //               mapper.delete(key)
  //               console.log("Pair Found")
  //               return
  //           }
  //           if (comboExtender == 0 && mapper.get(key) < runner) {
  //               comboExtender = mapper.get(key)
  //               comboExtenderZipCode = key
  //               console.log("comboExtender", comboExtender, comboExtenderZipCode)
  //           }
  //           if (runner != mapper.get(key)) {
  //               continue
  //           }
  //       }
  //       if (comboExtender == 0) {
  //           console.log("No answer")
  //           answer = false
  //           return answer
  //       }
  //       worker += mapper.get(comboExtenderZipCode)
  //       mapper.delete(comboExtenderZipCode)
  //       matcher(worker)
  //     }
  //     matcher(working)
  // }
  console.log("answer", answer)
  return answer
};
canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
// canPartitionKSubsets([4,16,5,3,10,4,4,4,10], 3);
// canPartitionKSubsets([4,3,2], 4)
// canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 4);
// canPartitionKSubsets([1,1,1,1,2,2,2,2], 2)
// canPartitionKSubsets([2,2,2,2,3,4,5], 4)
// canPartitionKSubsets([1,2,3,4], 3)
// canPartitionKSubsets([10,12,1,2,10,7,5,19,13,1], 4)
// canPartitionKSubsets([730,580,401,659,5524,405,1601,3,383,4391,4485,1024,1175,1100,2299,3908], 4)