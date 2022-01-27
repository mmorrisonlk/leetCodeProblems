/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaximumXOR = function(nums) {
    let valueSet = [...new Set(nums)]
    let maximumValue = 0
    for (let i = 0; i < valueSet.length; i++) {
        for (let j = i+1; j < valueSet.length; j++) {
            maximumValue = Math.max((valueSet[i] ^ valueSet[j]), maximumValue)
        }
    }
    return maximumValue
};


findMaximumXOR([3,10,5,25,2,8])
findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70])