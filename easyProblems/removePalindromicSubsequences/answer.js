var removePalindromeSub = function(s) {
    let array = s.split('');
    let yarra = array.reverse().join('')
    if(yarra === s) {
        return 1
    }
    else {
        return 2
    }
};

removePalindromeSub("abcde")