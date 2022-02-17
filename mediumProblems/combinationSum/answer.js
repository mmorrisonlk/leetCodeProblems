var combinationSum = function (candidates, target) {
  let combinationsSumToTarget = [];

  let sumReducer = (previousValue, currentValue) =>
    previousValue + currentValue;

  function summerFunction(previousArrayOfValues, index) {
    let currentSum = previousArrayOfValues.reduce(sumReducer);
    if (currentSum > target) {
      return;
    }
    if (currentSum === target) {
      combinationsSumToTarget.push(previousArrayOfValues);
      return;
    } else {
      for (let j = index + 1; j < candidates.length; j++) {
        let testyArray = previousArrayOfValues.slice();
        if (testyArray.reduce(sumReducer) + candidates[j] > target) {
          continue;
        } else {
          testyArray.push(candidates[j]);
          summerFunction(testyArray, j);
          let checkSum = testyArray.reduce(sumReducer) + candidates[j];
          while (checkSum <= target) {
            testyArray.push(candidates[j]);
            checkSum = checkSum + candidates[j];
            summerFunction(testyArray, j);
          }
        }
      }
    }
  }

  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] > target) {
      continue;
    } else {
      let passThroughArray = Array.of(candidates[i]);
      summerFunction(passThroughArray, i);
      let checkerySum = candidates[i] + candidates[i];
      while (checkerySum <= target) {
        passThroughArray.push(candidates[i]);
        checkerySum = checkerySum + candidates[i];
        summerFunction(passThroughArray, i);
      }
    }
  }

  return combinationsSumToTarget;
};

// combinationSum([2, 3, 6, 7], 7);
// combinationSum([2, 3, 5], 8);
// combinationSum([2], 1);
combinationSum([3,5,8], 11)
