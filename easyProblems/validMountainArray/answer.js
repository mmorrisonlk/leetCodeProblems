/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    }
    let summit = false
    for (let i = 1; i < arr.length; i++) {
        if (summit === true) {
            if (arr[i+1] >= arr[i]) {
                return false
            }
            else{
                continue
            }
        }
        else {
            if (arr[i-1] >= arr[i]) {
                return false
            }
            if (arr[i] > arr[i+1] || arr[i+1] === undefined) {
                if (arr[i+1] === undefined) {
                    return false
                }
                summit = true
                continue
            }
        }        
    }
    return true
};

validMountainArray([2,1])
validMountainArray([3,5,5])
validMountainArray([0,3,2,1])
validMountainArray([0,1,2,3,4,5,6,7,8,9])