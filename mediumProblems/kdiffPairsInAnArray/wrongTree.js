var findPairs = function(nums, k) {
    let arrayOfValuesToSearch = nums
    let goalDifferenceInValues = k
    let setOfUniqueValues = new Set();
    let numberOfUniqueMatches = 0
    for (let i = 0; i < arrayOfValuesToSearch.length; i++) {
        setOfUniqueValues.add(arrayOfValuesToSearch[i])
    }
    let arrayOfValuesMinusDuplicates = Array.from(setOfUniqueValues)
    for (let i = 0; i < arrayOfValuesMinusDuplicates.length; i++) {
        let positiveDifference = nums[i] + goalDifferenceInValues;
        let negativeDiffernce = nums[i] - goalDifferenceInValues;
        for (let j = i + 1; j < arrayOfValuesMinusDuplicates.length; j++) {
            if (positiveDifference === arrayOfValuesMinusDuplicates[j]) {
                numberOfUniqueMatches++
            }
            else if (negativeDiffernce === arrayOfValuesMinusDuplicates[j]) {
                numberOfUniqueMatches++
            }
            else {
                continue
            }
        }
    }
    console.log(numberOfUniqueMatches)
};

findPairs([3,1,4,1,5], 2)
findPairs([1,2,3,4,5], 1)
findPairs([1,3,1,5,4], 0)
// findPairs([1,2,4,4,3,3,0,9,2,3], 3)
// findPairs([6,3,5,7,2,3,3,8,2,4], 2)