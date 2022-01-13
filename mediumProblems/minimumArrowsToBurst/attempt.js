/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    let mapPossibleShots = new Map();
    for (let i = 0; i < points.length; i++) {
        let x = points[i][0]
        let y = points[i][1]
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue
            }
            if (x <= points[j][1] && y >= points[j][0] ) {
                if (mapPossibleShots.has(i)) {
                    mapPossibleShots.set(i, mapPossibleShots.get(i) + j.toString())
                }
                else {
                    mapPossibleShots.set(i, j.toString())
                }
            }
            else{
                continue
            }
        }
    }

    console.log(mapPossibleShots)

    let arrows = points.length

    if (mapPossibleShots.size === 0) {
        console.log(arrows)
    }

    const overlaps = mapPossibleShots.values();
    let k = 0
    let queso = {}
    while (k != mapPossibleShots.size) {
        let yarra = overlaps.next().value.split('')
        for (let l = 0; l < yarra.length; l++) {
            Object.defineProperty(queso, `${l}`, yarra[l])
        }
        k++
    }
    console.log(queso)
    console.log(arrows)
};

findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])
// findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])
// findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])
findMinArrowShots([[2,3],[2,3]])

/*
        let yarra = overlaps.next().value.split('')
        for (let l = 0; l < yarra.length; l++) {
            if (queso.includes(yarra[l])) {
                arrows--
            }
            else {
                queso.push(yarra[l])
            }
        }
*/