/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let splitPatternArray = pattern.split('')
    let splitStringArray = s.split(' ')
    let mapPatternStringMatches = {};
    if(splitPatternArray.length !== splitStringArray.length){
        return false
    }
    for (let i = 0; i < splitStringArray.length; i++) {
        console.log("splitPatternArray splitStringarray", splitPatternArray[i], splitStringArray[i])
        console.log(mapPatternStringMatches)

        if(`${splitPatternArray}` in mapPatternStringMatches && mapPatternStringMatches.splitPatternArray[i] !== splitStringArray[i]){
            console.log("false")
        }
        if(`${splitPatternArray}` in mapPatternStringMatches){
            console.log("here")
            continue
        }
        else{
            console.log("there")
            Object.defineProperty(mapPatternStringMatches, `${splitPatternArray[i]}`, `${splitStringArray[i]}`);
        }
    }
    console.log(mapPatternStringMatches)
    return true
};

// wordPattern("abbaa", "dog cat cat dog wolf")
wordPattern("abba", "dog dog dog dog")