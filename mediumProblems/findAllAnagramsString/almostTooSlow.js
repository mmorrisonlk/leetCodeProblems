/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {

    let stringToSearch = s;
    let anagramLength = p.length
    let anagramToLookFor = p;
    let mapOfAnagramLetters = new Map();
    let setOfNeededAnagramLetters = new Set();
    let foundAnagramStartIndexes = [];

    for (let i = 0; i < anagramToLookFor.length; i++) {
        if (mapOfAnagramLetters.has(anagramToLookFor.charAt(i))) {
            mapOfAnagramLetters.set(anagramToLookFor.charAt(i), (mapOfAnagramLetters.get(anagramToLookFor.charAt(i)) + 1));
        }
        else {
            mapOfAnagramLetters.set(anagramToLookFor.charAt(i), 1);
            setOfNeededAnagramLetters.add(anagramToLookFor.charAt(i))
        }
    }

    for (let j = 0; j < stringToSearch.length; j++) {
        if (setOfNeededAnagramLetters.has(stringToSearch.charAt(j)) && (j + anagramLength) <= stringToSearch.length) {
            searchSubstring(j)
        }
        else {
            continue;
        }
    }

    function compareMaps(map1, map2) {
        var testVal;
        if (map1.size !== map2.size) {
            return false;
        }
        for (var [key, val] of map1) {
            testVal = map2.get(key);
            // in cases of an undefined value, make sure the key
            // actually exists on the object so there are no false positives
            if (testVal !== val || (testVal === undefined && !map2.has(key))) {
                return false;
            }
        }
        return true;
    }
    // Borrowed from https://stackoverflow.com/questions/35948335/how-can-i-check-if-two-map-objects-are-equal

    function searchSubstring(indexStart) {
        let currentSubStringSearch = s.slice(indexStart, (indexStart + anagramLength));
        let tempMapOfSubString = new Map();
        for (let k = 0; k < currentSubStringSearch.length; k++) {
            if (!setOfNeededAnagramLetters.has(currentSubStringSearch.charAt(k))) {
                return
            }
            if (tempMapOfSubString.has(currentSubStringSearch.charAt(k))) {
                tempMapOfSubString.set(currentSubStringSearch.charAt(k), (tempMapOfSubString.get(currentSubStringSearch.charAt(k)) + 1));
            }
            else {
                tempMapOfSubString.set(currentSubStringSearch.charAt(k), 1);
            }
        }
        if (compareMaps(tempMapOfSubString, mapOfAnagramLetters)) {
            foundAnagramStartIndexes.push(indexStart)
        }
    }

    return foundAnagramStartIndexes

};

// findAnagrams("cbaebabacd", "abc")
// findAnagrams("abab", "ab")
findAnagrams("baa", "aa")