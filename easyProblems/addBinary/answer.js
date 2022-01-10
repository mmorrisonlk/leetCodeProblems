/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};

addBinary("11", "1")
addBinary("1010", "1011")

// https://leetcode.com/problems/add-binary/discuss/1619939/Javascript-Solution-with-BigInt

