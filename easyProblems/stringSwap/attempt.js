/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
     // sanity check to ensure the strings are the same length and returns false if not since they obviously can't be equal
    if (s1.length != s2.length) {
        return false
    } 
    // checks if they are already equal before adjustment and just returns true
    if (s1 == s2) {
        return true
     }
     // makes the strings into arrays so I can test each individual value in each string against each other
    let tester = s1.split("")
    let result = s2.split("")
    // stores differences between the strings
    let difference = []
    for (let i = 0; i < result.length; i++) {
        // if the array values don't match then add the array value and the array index to the difference array
        if (tester[i] != result[i]) {
            difference.push(tester[i], i)
        }
        // if a third mismatch occurs then difference's length will be 6 and I can fail the test at that point
        if (difference.length > 4) {
            return false
        } 
    }
    // checks for one mismatch because then there is nothing to swap with to still maintain the string
    if (difference.length == 2) {
        return false
    }
    // finally swaps the two mismatches and compares the strings after swap. will return true if that does make a match or false if the strings are still different
    tester.splice(difference[1], 1, difference[2])
    tester.splice(difference[3], 1, difference[0])
    if (result.toString() == tester.toString()) {
        return true
    }
    else {
        return false
    }
};

areAlmostEqual("caa", "aaz")