 var countBits = function(n) {
    let workingArray = Array(n).fill(0)
    for (let i = 0; i <= n; i++) {
        let workingValue = i.toString(2)
        console.log(workingValue)
        let onesCount = 0
        for (let j = 0; j < workingValue.length; j++) {
            if(workingValue.charAt(j) === "1") {
                onesCount++
            }
        }
        workingArray[i] = onesCount
    }
    return workingArray
};

countBits(2)
countBits(5)