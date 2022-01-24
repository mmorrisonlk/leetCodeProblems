/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
     let yarra = word.split('')
     let continueUpper
     if (yarra[0] !== yarra[0].toUpperCase()) {
        for (let i = 1; i < yarra.length; i++) {
            if(yarra[i] !== yarra[i].toUpperCase()){
                continue
            }
            else{
                return false
            }
        }
        return true
     }
     else{
         for (let i = 1; i < yarra.length; i++) {
            if (i >= 2) {
                if (continueUpper === true) {
                    if(yarra[i] === yarra[i].toUpperCase()){
                        continue
                    }
                    else{
                        return false
                    }
                } else {
                    if(yarra[i] !== yarra[i].toUpperCase()){
                        continue
                    }
                    else{
                        return false
                    }
                }
            } 
             if (i === 1) {
                if(yarra[i] === yarra[i].toUpperCase()){
                    continueUpper = true
                    continue
                }
                else{
                    continueUpper = false
                    continue
                }
             }
         }
         return true
     }
};

detectCapitalUse("flag")