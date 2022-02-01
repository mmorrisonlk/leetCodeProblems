/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let [lowestPrice, highestPrice, greatestDifference] = [10001, 0, 0]
    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > highestPrice) {
            highestPrice = prices[i]
            lowestPrice = prices[i]
        }
        else{
            if (prices[i] < lowestPrice) {
                lowestPrice = prices[i]
                if ((highestPrice - lowestPrice) > greatestDifference){
                    greatestDifference = (highestPrice - lowestPrice)
                }
            }
        } 
    }
    return greatestDifference
};

maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])
maxProfit([3,2,6,5,0,3])