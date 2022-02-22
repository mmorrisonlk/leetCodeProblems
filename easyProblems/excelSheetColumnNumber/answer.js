var titleToNumber = function(columnTitle) {
    let addingValues = []
    for (let i = 0; i < columnTitle.length; i++) {
        if(addingValues) {
            addingValues = addingValues.map((y) => y * 26)
        }
        addingValues.push(columnTitle.charCodeAt(i) - 64)
    }
    return addingValues.reduce((x, y) => x + y)
};

titleToNumber("A")
titleToNumber("AB")
titleToNumber("ZYAB")