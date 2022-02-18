var removeKdigits = function(num, k) {
    if(num.length === k) {
        console.log(0)
    }
    let integerNum = parseInt(num)
    let numberOfDigits = num.length

    function testValueRemoval() {
        let tensPlace = 1
        for (let i = 1; i <= numberOfDigits; i++) {
            tensPlace = tensPlace*10
            let minuser = integerNum%(tensPlace)
            console.log(integerNum - minuser)
        }
    }

    testValueRemoval()

    console.log(parseInt(num))
};

removeKdigits("1432219", 3)
// removeKdigits("10200", 1)
// removeKdigits("10", 2)