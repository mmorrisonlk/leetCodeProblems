var buddyStrings = function(s, goal) {
    var testArray = s.split('');
    var testYarra = goal.split('');
    if (testArray.length !== testYarra.length) {
        console.log("length", false)
        return false
    }
    var arraySort = testArray.sort();
    var yarraSort = testYarra.sort();
    for (let i = 0; i < arraySort.length; i++) {
        if (arraySort[i] !== yarraSort[i]) {
            console.log("sort", false)
            return false
        }
    }
    let occurrences = {};
    for (let i = 0, j = testArray.length; i < j; i++) {
        occurrences[testArray[i]] = (occurrences[testArray[i]] || 0) + 1;
     }
    let values = Object.values(occurrences)
    for (let i = 0, j = values.length; i < j; i++) {
        if (values[i] == values[i + 1] && testArray.length == 2 && s != goal ) {
            console.log("specialer")
            return true
        }
        if (values[i] == 1 && s == goal) {
            if (i == j - 1) {
                console.log("special")
                return false
            }
        }
        else {
            break
        }
    }
    var array = s.split('');
    var yarra = goal.split('');
    var arrayTest = s.split('');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            [array[i], array[j]] = [array[j], array[i]]
            if (array.join() === yarra.join()) {
                console.log(true)
                return (true)
            }
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
    console.log("test", false)
    return false

};

buddyStrings("abab", "baba");