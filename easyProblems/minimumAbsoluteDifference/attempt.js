/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
     let sortedYarra = arr.sort(function compareNumbers(a, b) { return a - b; })
     let answers = []
     let difference = Math.abs(sortedYarra[0] - sortedYarra[1])
    for (let i = 0; i < sortedYarra.length; i++) {
        // if (Object.is(Math.abs(sortedYarra[i] - sortedYarra[i + 1]), NaN)) {
        //     break
        // }
        if (Math.abs(sortedYarra[i] - sortedYarra[i + 1]) < difference) {
            difference = Math.abs(sortedYarra[i] - sortedYarra[i + 1])
            answers = []
            answers.push([sortedYarra[i], sortedYarra[i + 1]])
        }
        else if (Math.abs(sortedYarra[i] - sortedYarra[i + 1]) == difference) {
            answers.push([sortedYarra[i], sortedYarra[i + 1]])
        }
        else {
            continue
        }
    }
    return answers
};

// minimumAbsDifference([4,2,1,3])
// minimumAbsDifference([3,8,-10,23,19,-4,-14,27])
minimumAbsDifference([40,11,26,27,-20])
