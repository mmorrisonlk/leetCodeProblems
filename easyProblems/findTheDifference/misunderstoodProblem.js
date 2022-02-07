/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
     let mapOfExtantCharacters = new Set();
     let answer

    for (let i = 0; i < s.length; i++) {
        if(mapOfExtantCharacters.length === 25) {
            return
        }
        mapOfExtantCharacters.add(s.charAt(i))
    }

    for (let j = 0; j < t.length; j++) {
        if (!mapOfExtantCharacters.has(t.charAt(j))) {
            answer = t.charAt(j)
            return answer
        }
    }
};

findTheDifference("abcd", "abcde")
findTheDifference("", "y")