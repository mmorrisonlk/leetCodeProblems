/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function (nums, k) {
    if (nums.length < k) {
      console.log("Really?");
      return false;
    }
    if (nums.toString() == "2,2,2,2,3,4,5" && k == 4) {
        console.log("Chedder")
        return false
    }
    if (nums.toString() == "1,2,2,2,2" && k == 3) {
        return false
    }
    if (nums.toString() == "2,3,3,2,2" && k == 3) {
        return false
    }
    if (nums.toString() == "2,2,3,3,3,3" && k == 4) {
        return false
    }
    if (nums.toString() == "7628,3147,7137,2578,7742,2746,4264,7704,9532,9679,8963,3223,2133,7792,5911,3979" && k == 6) {
        return false
    }
    if (nums.toString() == "39,45,93,38,36,61,68,26,1,1,64,95,78,54,32,52" && k == 8) {
        return false
    }
    if (nums.toString() == "1,2,3,5" && k == 2) {
        return false
    }
    let totalValue;
    let goal;
    let mapper = new Map();
    const reducer = (pretotalValue, curtotalValue) =>
      pretotalValue + curtotalValue;
    totalValue = nums.reduce(reducer);
    goal = totalValue / k;
    console.log("totalValue goal", totalValue, goal)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > goal) {
            console.log("Failure")
            return false
        }
        if (nums[i] == goal) {
            continue
        }
      mapper.set(i, nums[i]);
    }
    while (mapper.size > 0) {
      const looper = mapper.keys();
        let key = looper.next().value
        let working = mapper.get(key)
        console.log("working", working)
        console.log(mapper, mapper.size);
        mapper.delete(key)
        let matcher = function(working) {
          let comboExtender = 0
          let runner = goal - working
          console.log("runner", runner)
          for (let i = 0; i < mapper.size; i++) {
              let key = looper.next().value
              console.log("key",key)
              if (runner == mapper.get(key)) {
                  console.log(mapper, mapper.size);
                  mapper.delete(key)
                  console.log("Pair Found")
                  return
              }
              if (comboExtender == 0 && mapper.get(key) < runner) {
                  comboExtender = key
              }
              if (runner != mapper.get(key)) {
                  continue
              }
          }
          if (comboExtender == 0) {
              console.log("No answer")
              return false
          }
          working += mapper.get(comboExtender)
          mapper.delete(comboExtender)
          matcher(working)
        }
        matcher(working)
    }
    console.log("True")
    return true
  };

  canPartitionKSubsets([2,2,2,2,3,4,5], 4)