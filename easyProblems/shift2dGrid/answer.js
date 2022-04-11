var shiftGrid = function(grid, k) {
    let flatBoi = grid.flat()
    if (flatBoi.length === k) {
        return grid
    }
    let reducedWork = k
    while (reducedWork >= flatBoi.length) {
        reducedWork = reducedWork - flatBoi.length
    }
    if (reducedWork === 0) {
        return grid
    }
    for (let i = 0; i < reducedWork; i++) {
        let temp = flatBoi.pop();
        flatBoi.unshift(temp);
    }
    let c = 0
    for (let j = 0; j < grid.length; j++) {
        if (Array.isArray(grid[j])) {
            for (let k = 0; k < grid[j].length; k++) {
                grid[j][k] = flatBoi[c]
                c++
            }
        }
    }
    return grid
};

shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 4)
// [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]
// 4
// [[1,2,3],[4,5,6],[7,8,9]]
// 9