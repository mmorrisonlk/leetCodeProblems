/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let revNumber = 0;
    let j = x;
    while(j > 0) {
        revNumber = (revNumber * 10) + (j % 10);
        j = ~~(j/10);
    }
    return x === revNumber;
};

isPalindrome(-121)

//I had to borrow something because my solution involved converting to an array which was just timing things out. I forgot that clever way of reversing a number by using the quotient and powers of 10. The "~~" is a fast way to math.floor positive numbers.