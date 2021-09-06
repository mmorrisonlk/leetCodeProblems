var isAnagram = function(s, t) {
    var array = s.split('').sort();
    var yarra = t.split('').sort();
    for (let index = 0; index < array.length; index++) {
        if (array.length !== yarra.length){
            console.log("false")
            break
        }
        if (array[index] !== yarra[index]){
            console.log("false")
            break
        }
        if (index === array.length-1) {
            console.log("true");
        }
    }

    console.log(array);
    console.log(yarra);
};

isAnagram("a", "ab")