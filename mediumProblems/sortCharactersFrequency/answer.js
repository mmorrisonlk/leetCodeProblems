/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let string = s
    let map = new Map()
    let array = []

    function rebuildWord(value, key) {
        let builder = ""
        console.log("Hello There", key)
        for (let i = 0; i < value; i++) {
            console.log("General Kenobi")
            builder = builder + key
        }
        array.push(builder)
    }

    function compareLength(a, b) {
        return b.length - a.length;
    }

    for (let i = 0; i < string.length; i++) {
        if (map.has(string.charAt(i))) {
            map.set(string.charAt(i), (map.get(string.charAt(i)) + 1))
        }
        else {
            map.set(string.charAt(i), 1)
        }
    }
    map.forEach(rebuildWord)
    array.sort(compareLength)
    return array.join("")
};

frequencySort("tree")