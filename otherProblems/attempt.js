var jumbledNumbers = function(jumble) {
    var jumbleArray = jumble.split("");
    let i = 0
    let [zero, one, two, three, four, five, six, seven, eight, nine] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    var sorterEvens = function(array) {
        switch (array[i]) {
            case "z":
                zero++
                // console.log("z")
                break;
            case "w":
                two++
                // console.log("w")
                break;
            case "x":
                six++
                // console.log("x")
                break;
            case "g":
                eight++
                // console.log("g")
                break;
            case "u":
                four++
                // console.log("u")
                break;        
            default:
                sorterOdds(array[i])
                break;
        }
        i++
    }

    var sorterOdds = function(value) {
        switch (value){
            case "o":
                one++
                // console.log("o")
                break;
            case "t":
                three++
                // console.log("t")
                break;
            case "f":
                five++
                // console.log("f")
                break;
            case "s":
                seven++
                // console.log("s")
                break;
            case "i":
                nine++
                // console.log("i")
                break;
        }
    }
    
    while (i < jumbleArray.length) {
        sorterEvens(jumbleArray)
    }

    var trueOne = one - zero - two - four;
    var trueThree = three - two - eight;
    var trueFive = five - four;
    var trueSeven = seven - six;
    var trueNine = nine - trueFive - six - eight

    if (zero > 0) {
        console.log(0)
        zero--
    }
    if (trueOne > 0) {
        console.log(1)
        trueOne--
    }
    if (two > 0) {
        console.log(2)
        two--
    }
    if (trueThree > 0) {
        console.log(3)
        trueThree--
    }
    if (four > 0) {
        console.log(4)
        four--
    }
    if (trueFive > 0) {
        console.log(5)
        trueFive--
    }
    if (six > 0) {
        console.log(6)
        six--
    }
    if (trueSeven > 0) {
        console.log(7)
        trueSeven--
    }
    if (eight > 0) {
        console.log(8)
        eight--
    }
    if (trueNine > 0) {
        console.log(9)
        trueNine--
    }

    // console.log(zero, trueOne, two, trueThree, four, trueFive, six, trueSeven, eight, trueNine)

}
/*
(z)ero      z, w, x, g, u, on, th, fiv, se, ni
one
t(w)o
three
fo(u)r
five
si(x)
seven
ei(g)ht
nine

one
three
five
seven
nine
*/

jumbledNumbers("ttwwoo")