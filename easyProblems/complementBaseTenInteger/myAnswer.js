/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
     let rewsna = n.toString(2)
    let yarra = rewsna.split('')
    for (let i = 0; i < yarra.length; i++) {
        yarra[i] = 1 - yarra[i]
    }
    let answer = parseInt(yarra.join(''), 2)
    return answer
};

bitwiseComplement(7)