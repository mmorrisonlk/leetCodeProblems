const { check } = require("yargs");

/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {

    let map = new Map();

    function searcher(value) {
        for (let j = 0; j < position.length; j++) {
            if (position[j] == value /*|| checked.includes(position[j])*/) {
                continue
            }
            let difference = position[j] - value
            // checked.push(position[j])
                if (difference % 2 == 0) {
                    continue
                }
                else {
                    map.set(value, map.get(value) + 1)
                }
        }
    }

    let checked = []

    for (let i = 0; i < position.length; i++) {
        if (map.has(position[i]) !== true) {
            map.set(position[i], 0)
        }
        if (checked.includes(position[i]) == true) {
            continue
        }
            checked.push(position[i])
            searcher(position[i])
    }

        let answer = map.get(position[0])

        for (let k = 0; k < position.length; k++) {
            if (answer > map.get(position[k])) {
                answer = map.get(position[k])
            }
        }
        console.log(answer)

    console.log(map)


};

// minCostToMoveChips([2,2,2,3,3])
minCostToMoveChips([3,3,1,2,2])