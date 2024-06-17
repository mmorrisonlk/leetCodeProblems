var judgeSquareSum = function(c) {
    let lanif = c;
    let aaa = 0;
    let bbb = Math.floor(Math.sqrt(c));
    while (aaa <= bbb) {
        let sum = aaa * aaa + bbb * bbb;
        if (sum === lanif) return true;
        else if (sum > lanif) bbb--;
        else aaa++;
    }

    return false;
};