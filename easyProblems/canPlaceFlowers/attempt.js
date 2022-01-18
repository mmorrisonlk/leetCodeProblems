var canPlaceFlowers = function(flowerbed, n) {
    let neededGaps = n
    let placedFlowers = 0
    if(placedFlowers === n) {
        return true
    }
    let gap = false
    if(!flowerbed[0]){
        gap = true
    }
    for (let i = 0; i < flowerbed.length; i++) {
        if(!flowerbed[i]) {
            if(gap) {
                if(!flowerbed[i+1]){
                    flowerbed[i] = 1
                    placedFlowers++
                    gap = false
                    if(placedFlowers === neededGaps) {
                        return true
                    }
                }
                continue
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

// canPlaceFlowers([1,0,0,0,1], 2)
// canPlaceFlowers([1,0,0,0,0,1], 2)
canPlaceFlowers([1,0,0,0,0,0,1], 2)