var findPairs = function(nums, k) {
    let uniquePairs = 0;
    let foundMatches = new Map()
    for (let i = 0; i < nums.length; i++) {
        let positiveK = nums[i] + k;
        let negativeK = nums[i] - k;
        for (let j = (i + 1); j < nums.length; j++) {
            if (foundMatches.has(nums[i])) {
                if (foundMatches.get(nums[i]).includes(nums[j])) {
                    continue
                }
            }
            if (positiveK === nums[j]) {

                if (foundMatches.has(nums[i])) {
                    let tempArray = foundMatches.get(nums[i])
                    tempArray.push(nums[j])
                    foundMatches.set(nums[i], tempArray)
                }
                else {
                    foundMatches.set(nums[i], Array.of(nums[j]))
                }

                if (foundMatches.has(nums[j])) {
                    let tempArray = foundMatches.get(nums[j])
                    tempArray.push(nums[i])
                    foundMatches.set(nums[j], tempArray)
                }
                else {
                    foundMatches.set(nums[j], Array.of(nums[i]))
                }

                uniquePairs++
                continue
            }
            else if (negativeK === nums[j]) {

                if (foundMatches.has(nums[i])) {
                    let tempArray = foundMatches.get(nums[i])
                    tempArray.push(nums[j])
                    foundMatches.set(nums[i], tempArray)
                }
                else {
                    foundMatches.set(nums[i], Array.of(nums[j]))
                }

                if (foundMatches.has(nums[j])) {
                    let tempArray = foundMatches.get(nums[j])
                    tempArray.push(nums[i])
                    foundMatches.set(nums[j], tempArray)
                }
                else {
                    foundMatches.set(nums[j], Array.of(nums[i]))
                }

                uniquePairs++
                continue
            }
            else {
                continue
            }
        }
    }
    console.log(uniquePairs)
    console.log(foundMatches)
    return uniquePairs
};

// findPairs([3,1,4,1,5], 2)
// findPairs([1,2,3,4,5], 1)
// findPairs([1,3,1,5,4], 0)
findPairs([1,2,4,4,3,3,0,9,2,3], 3)
// findPairs([6,3,5,7,2,3,3,8,2,4], 2)