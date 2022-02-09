var findPairs = function(nums, k) {
    let uniquePairs = 0;
    let foundMatches = new Map();
    let mapOfOpposites = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapOfOpposites.has(nums[i])) {
            if ((foundMatches.has(nums[i]) && foundMatches.get(nums[i]) === nums[foundMatches.get(nums[i])])){
                continue
            }
            else if (foundMatches.has(nums[mapOfOpposites.get(nums[i])]) && foundMatches.get(nums[mapOfOpposites.get(nums[i])]) === nums[i]) {
                continue
            } else {
                uniquePairs++
                console.log(nums[i])
                foundMatches.set(nums[i], nums[mapOfOpposites.get(nums[i])])
            }
        }
        let positiveK = (nums[i] + k)
        let negativeK = (nums[i] - k)
        mapOfOpposites.set(positiveK, i)
        if (positiveK != negativeK) {
            mapOfOpposites.set(negativeK, i)
        }

    }
    console.log(uniquePairs)
    console.log(foundMatches)
    console.log(mapOfOpposites)
    return uniquePairs
};

// findPairs([3,1,4,1,5], 2)
// findPairs([1,2,3,4,5], 1)
// findPairs([1,3,1,5,4], 0)
// findPairs([1,2,4,4,3,3,0,9,2,3], 3)
findPairs([6,3,5,7,2,3,3,8,2,4], 2)