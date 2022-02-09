var findPairs = function(nums, k) {
    let uniquePairs = 0;
    let foundMatches = new Map();
    let mapOfOpposites = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapOfOpposites.has(nums[i])) {
            uniquePairs += mapOfOpposites.get(nums[i])
            foundMatches 
        }
        let positiveK = (nums[i] + k)
        let negativeK = (nums[i] - k)
        if (mapOfOpposites.has(positiveK)) {
            mapOfOpposites.set(positiveK, (mapOfOpposites.get(positiveK) + 1))
        }
        else {
            mapOfOpposites.set(positiveK, 1)
        }
        if (positiveK != negativeK) {
            if (mapOfOpposites.has(negativeK)) {
                mapOfOpposites.set(negativeK, (mapOfOpposites.get(negativeK) + 1))
            }
            else {
                mapOfOpposites.set(negativeK, 1)
            }
        }

    }
    console.log(mapOfOpposites)
    console.log(uniquePairs)
};

findPairs([3,1,4,1,5], 2)
// findPairs([1,2,3,4,5], 1)
// findPairs([1,3,1,5,4], 0)