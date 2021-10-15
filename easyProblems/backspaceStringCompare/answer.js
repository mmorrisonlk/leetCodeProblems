/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {

    var slicer = function(index, sub) {
        return sub.substring(0, index - 1) + sub.substring(index + 1)
    }
    var dicer = function(string) {
        let slice = string
        for (let i = 0; i < slice.length; i++) {
            if (slice.charAt(i) == "#") {
                slice = slicer(i, slice)
                i -= 2
            }
            
        }
        return slice
    }
    let finalS = dicer(s)
    let finalT = dicer(t)
    if (finalT == finalS) {
        return true
    }
    else {
        return false
    }
};

backspaceCompare("ab#c", "ad#c")