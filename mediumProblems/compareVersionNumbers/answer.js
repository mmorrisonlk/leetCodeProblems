var compareVersion = function(version1, version2) {
    let versionHistoryOne = version1.split(".")
    let versionHistoryTwo = version2.split(".")
    let currentHistoryOne, currentHistoryTwo, answer
    for (let i = 0; i < versionHistoryOne.length || i < versionHistoryTwo.length; i++) {
        if(versionHistoryOne[i]){
            currentHistoryOne = parseInt(versionHistoryOne[i])
        }
        else {
            currentHistoryOne = 0
        }
        if(versionHistoryTwo[i]){
            currentHistoryTwo = parseInt(versionHistoryTwo[i])
        }
        else {
            currentHistoryTwo = 0
        }
        if(currentHistoryOne > currentHistoryTwo){
            answer = 1
            return answer
        }
        else if(currentHistoryOne < currentHistoryTwo){
            answer = -1
            return answer
        }
        else {
            continue
        }
    }
    answer = 0
    return answer
};

compareVersion("1.01", "1.001")
compareVersion("1.0", "1.0.0")
compareVersion("0.1", "1.1")