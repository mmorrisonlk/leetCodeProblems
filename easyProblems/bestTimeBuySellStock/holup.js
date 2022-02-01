/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [lowestPrice, highestPrice, newHigh, newLow, bool] = [prices[0], prices[0], false, false, false]
    // let lowestPrice, highestPrice
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i]
            if (!bool){
                highestPrice = prices[i]
                bool = true
            }
            newLow = true
        }
        if (prices[i] > highestPrice && newLow === true) {
            highestPrice = prices[i]
            newHigh = true
        }
    }
    console.log(newLow, newHigh)
    if (newLow && newHigh) {
        return highestPrice - lowestPrice
    }
    else {
        return 0
    }
};

maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])