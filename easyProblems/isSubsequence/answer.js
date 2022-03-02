var isSubsequence = function(s, t) {
    let subsequence = s.split('');
    let totalString = t;
    let totalStringPosition = 0
    while (subsequence.length > 0) {
        if (totalString.charAt(totalStringPosition) === subsequence[0]) {
            subsequence.shift()
        }
        totalStringPosition++
        if ((totalString.length - totalStringPosition) < subsequence.length) {
            return false
        }
    }
    return true
};

isSubsequence("abc", "ahbgdc")
isSubsequence("axc", "ahbgdc")