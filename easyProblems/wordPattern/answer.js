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
        // console.log(i, `${splitPatternArray[i]}` in mapPatternStringMatches, mapPatternStringMatches[splitPatternArray[i]] !== splitStringArray[i])
        if((`${splitPatternArray[i]}` in mapPatternStringMatches) && mapPatternStringMatches[splitPatternArray[i]] !== splitStringArray[i]){
            return false
        }
        if(Object.values(mapPatternStringMatches).includes(splitStringArray[i])){
            if(mapPatternStringMatches[splitPatternArray[i]] !== splitStringArray[i]){
                return false
            }
            else{
                continue
            }
        }
        else{
            mapPatternStringMatches[splitPatternArray[i]] = splitStringArray[i]
        }
    }
    console.log(mapPatternStringMatches)
    return true
};

wordPattern("abbaa", "dog cat cat dog wolf")
wordPattern("abba", "dog dog dog dog")