var scoreOfParentheses = function(s) {
    let yarra = s.split('')
    while (yarra.includes("(") || yarra.length !== 1) {
        for (let i = 0; i < yarra.length; i++) {
            if (yarra[i] === "(") {
                if (!isNaN(yarra[i + 1]) && yarra[i + 2] === ")") {
                    yarra.splice(i, 3, (yarra[i + 1] * 2))
                }
                else if (yarra[i + 1] === ")") {
                    yarra.splice(i, 2, 1)
                }
            }
            if (!isNaN(yarra[i]) && !isNaN(yarra[i + 1])) {
                yarra.splice(i, 2, (yarra[i] + yarra[i + 1]))
            }
        }
    }
    return(yarra[0])
};

scoreOfParentheses("()")
scoreOfParentheses("(())")
scoreOfParentheses("()()")