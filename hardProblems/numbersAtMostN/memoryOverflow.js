/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
    let results = new Set()
    function singleDigit() {
        for (let i = 0; i < digits.length; i++) {
            let y = digits[i]
            if (y <= n) {
                results.add(y)
                multiDigit(y)
            }   
        }
    }

    function multiDigit(value) {
        for (let j = 0; j < digits.length; j++) {
            let calc = value
            while (calc <= n) {
                calc += digits[j]
                if (calc <= n) {
                    if (!results.has(calc)) {
                        results.add(calc)
                        multiDigit(calc)
                    }
                }
            }
            
        } 
    }

    singleDigit()
    return results.size
};

// atMostNGivenDigitSet(["1","3","5","7"], 100)
atMostNGivenDigitSet(["1","4","9"], 1000000000)
// atMostNGivenDigitSet(["7"], 8)

// var atMostNGivenDigitSet = function(digits, n) {
//     let results = new Set()
//     for (let i = 0; i < digits.length; i++) {
//         for (let j = 0; j < digits.length; j++) {
//             // if (j == i) {
//             //     continue
//             // }
//             if (digits[i] + digits[j] <= n) {
//                 results.add(digits[i] + digits[j])
//             }
//             if (digits[j] + digits[i] <= n) {
//                 results.add(digits[j] + digits[i])
//             }
//         }
//         if (digits[i] <= n) {
//             results.add(digits[i])
//         }    
//     }
//     console.log(results.size)
//     console.log(results)
// };

// var atMostNGivenDigitSet = function(digits, n) {
//     let results = new Set()
//     function singleDigit() {
//         for (let i = 0; i < digits.length; i++) {
//             let y = digits[i]
//             if (y <= n) {
//                 results.add(y)
//                 multiDigit(y)
//             }   
//         }
//     }

//     function multiDigit(value) {
//         for (let j = 0; j < digits.length; j++) {
//             let calc = value
//             while (calc <= n) {
//                 calc += digits[j]
//                 if (calc <= n) {
//                     results.add(calc)
//                     multiDigit(calc)
//                 }
//             }
            
//         } 
//     }

//     singleDigit()
//     return results.size
//     // console.log(results.size)
//     // console.log(results)
// };