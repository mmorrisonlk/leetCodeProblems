/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let neededGaps = n
    let foundGaps = 0
    let gap = false
    let filledGap = false
    for (let i = 0; i < flowerbed.length; i++) {
        console.log(i, gap)
        if(!flowerbed[i]) {
            if(gap) {
                foundGaps++
                gap = false
                if(foundGaps === neededGaps) {
                    return true
                }
            }
            else{
                gap = true
            }
        }
        else {
            gap = false
        }
    }
    return false
};

canPlaceFlowers([1,0,0,0,1], 2)
canPlaceFlowers([1,0,0,0,0,1], 2)