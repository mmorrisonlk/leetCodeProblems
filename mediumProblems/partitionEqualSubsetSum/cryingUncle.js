/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var canPartition = function(nums) {

const { exit } = require("process");

//     let mapTest = new Map();
//     let arr = nums;
//     let n = nums.length

//     function recursiveFindAll(arr, n, v, sum) {
//         // if (sum == 0) {
//         //     for (let x of v)
//         //         console.log(x + " ");
//         //     console.log("<br>")
//         //     return;
//         // }
        
//         if (n == 0)
//         return;

//         recursiveFindAll(arr, n - 1, v, sum);
//         v.push(arr[n - 1]);
//         recursiveFindAll(arr, n - 1, v, sum - arr[n - 1]);
//         v.pop();
//     }

//     function findAllSubsets(arr, n, sum) {
//         let v = [];
//         recursiveFindAll(arr, n, v, sum)
//         console.log(v)
//     }

//     findAllSubsets(arr, n, sum)

// };

// canPartition([1,5,11,5])

// canPartition([1,2,3,5])

var canPartition = function(nums) {

    let arr = nums;
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        max += nums[i]
    }
    let sum = max/2;
    console.log(sum)
    let n = nums.length

    function recursiveFindAll(arr, n, v, sum) {
        if (sum == 0) {
            // console.log(true)
            exit(true)
        }
        
        if (n == 0)
        return;

        recursiveFindAll(arr, n - 1, v, sum);
        v.push(arr[n - 1]);
        recursiveFindAll(arr, n - 1, v, sum - arr[n - 1]);
        v.pop();
    }

    function findAllSubsets(arr, n, sum) {
        let v = [];
        recursiveFindAll(arr, n, v, sum)
    }

    findAllSubsets(arr, n, sum)

    // console.log(false)
    return false

};

// canPartition([1,5,11,5])

canPartition([1,2,3,5])

// borrowed information from https://www.geeksforgeeks.org/recursive-program-to-print-all-subsets-with-given-sum/