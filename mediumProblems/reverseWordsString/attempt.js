/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let yarra = s.split(" ").reverse()
    let filtered = yarra.filter(word => word.length > 0)
    let gnirts = filtered.join(" ")
    return gnirts
};
reverseWords("  hello world  ")

// "the sky is blue"
// "  hello world  "
// "a good   example"
// "  Bob    Loves  Alice   "
// "Alice does not even like bob"