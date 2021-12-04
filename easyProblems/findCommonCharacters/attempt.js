/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {

    let found = new Map()
    let checker = new Map()

    function slicer(bird) {
        let drib = bird
        for (let i = 0; i < drib.length; i++) {
            console.log(drib.charAt(i))
        }
    }

    for (let i = 0; i < words.length; i++) {
        slicer(words[i])    
    }

};

commonChars(["bella","label","roller"])