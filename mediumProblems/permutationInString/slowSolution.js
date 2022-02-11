var checkInclusion = function(goalString, stringToSearch) {

    let answer = false

    if (goalString.length > stringToSearch.length) {
        return answer
    }

    let lettersGoalString = new Map();
    let lettersStringToSearch = new Set();

    for (let i = 0; i < goalString.length; i++) {
        lettersGoalString.set(goalString.charAt(i), (lettersGoalString.get(goalString.charAt(i)) + 1 || 1))
    }
    for (let i = 0; i < stringToSearch.length; i++) {
        lettersStringToSearch.add(stringToSearch.charAt(i))
    }

    lettersGoalString.forEach((_, letter) => {
        if (lettersStringToSearch.has(letter)) {
        }
        else {
            console.log("false")
            return answer
        }
    })

    function parallelSearch(startValue, foundCharacter) {
        if(answer) {
            return
        }
        let clonedMap = new Map(lettersGoalString);
        if (clonedMap.get(foundCharacter) === 1) {
            clonedMap.delete(foundCharacter)
        }
        else {
            clonedMap.set(foundCharacter, (clonedMap.get(foundCharacter) - 1))
        }
        if (clonedMap.size === 0) {
            answer = true
            return
        }
        for (let j = startValue + 1; j < stringToSearch.length; j++) {
            if (!clonedMap.has(stringToSearch.charAt(j))) {
                return
            }
            else {
                if (clonedMap.get(stringToSearch.charAt(j)) === 1) {
                    clonedMap.delete(stringToSearch.charAt(j))
                }
                else {
                    clonedMap.set(stringToSearch.charAt(j), (clonedMap.get(stringToSearch.charAt(j)) - 1))
                }
            }
            if (clonedMap.size === 0) {
                answer = true
                return
            }
        }
    }

    for (let i = 0; i < stringToSearch.length; i++) {
        if(answer) {
            console.log("general Kenobi")
            return answer
        }
        if (lettersGoalString.has(stringToSearch.charAt(i))) {
            parallelSearch(i, stringToSearch.charAt(i))
        }
        
    }

    console.log("hello")

    return answer
};

checkInclusion("ab", "eidbaooo")
checkInclusion("ab", "eidboaoo")