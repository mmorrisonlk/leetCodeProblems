/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    var leading, lagging
    var polymerase = 0 
    var primer = 0

    if (text1.length >= text2.length) {
        leading = text2
        lagging = text1
    }
    else {
        leading = text1
        lagging = text2
    }
    console.log("Leading, Lagging", leading, lagging)

    var primase = function(peptide, leadingPosition, laggingPosition, fragment) {
        let i = leadingPosition
        let j
        if (fragment != undefined) {
            console.log("j = primer")
            j = fragment
        }
        else {
            console.log("j = lagging")
            j = laggingPosition
        }
        for (j + 1; j < lagging.length; j++) {
            if(peptide == lagging.charAt(j)) {
                console.log("primase match", peptide)
                polymerase++
                primer = j + 1
                helicase(i + 1, j)
                return
            }
            else if (j == lagging.length - 1) {
                if (fragment != undefined) {
                    console.log("helicase primer")
                    helicase(i + 1, fragment)
                    return
                }
                else {
                    console.log("helicase lagging")
                    helicase(i + 1, laggingPosition + 1)
                    return
                }
            }
        }
    }

    var helicase = function(leadingPosition, laggingPosition) {
        let i = leadingPosition
        let j = laggingPosition
        console.log("leading lagging", i, j)
        if (i == leading.length + 1) {
            return
        }
        if(leading.charAt(i) == lagging.charAt(j) && i < leading.length) {
                console.log("match", leading.charAt(i))
                polymerase++
                primer = i
                i++
                j++
                helicase(i, j)
            }
        else {
                if (primer < j) {
                    console.log("primer primase")
                    primase(leading.charAt(i), i, j, primer)
                }
                else {
                    console.log("j primase")
                    primase(leading.charAt(i), i, j)
                }
            }
        }

    helicase(0, 0)
    console.log(polymerase)
        return polymerase
};

// longestCommonSubsequence("abcde", "ace")
// longestCommonSubsequence("abc", "acedb")
// longestCommonSubsequence("psnw", "vozsh")
// longestCommonSubsequence("ezupkr", "ubmrapg")
// longestCommonSubsequence("bsbininm", "jmjkbkjkv")
longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")
