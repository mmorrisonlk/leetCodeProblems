var minIncrementForUnique = function(nums) {
    let yarra = nums;
    yarra.sort((a, b) => (a - b))
    let increment = 0
    for (let i = 1; i < yarra.length; i++) {
        if (yarra[i] == yarra[i - 1]) {
            yarra[i] += 1
            increment++
        }
        else if (yarra[i] < yarra[i - 1]) {
            let gap = Math.abs(yarra[i] - yarra[i - 1])
            yarra[i] += gap + 1
            increment += gap + 1
        }
    }
    return increment
};