var scoreOfParentheses = function(s) {
    while (s.includes("(")) {
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === "(") {
                if (!isNaN(s.charAt(i + 1)) && s.charAt(i + 2) === ")") {
                    s = (s.substring(0, i) + `${(s.charAt(i + 1) * 2)}` + s.substring(i + 3, s.length))
                    i = i - 1
                }
                else if (s.charAt(i + 1) === ")") {
                    // console.log("Before", s.substring(0, i))
                    // console.log("After", s.substring(i + 2))
                    s = (s.substring(0, i) + "1" + s.substring(i + 2))
                    i = i - 1
                    console.log(s)
                }
            }
            if (!isNaN(s.charAt(i)) && !isNaN(s.charAt(i + 1))) {
                s = (s.substring(0, i) + `${s.charAt(i) + s.charAt(i + 1)}` + s.substring(i + 2))
                i = i - 1
            }
        }
    }
    console.log("final answer", s)
};

scoreOfParentheses("()")
scoreOfParentheses("(())")
scoreOfParentheses("()()")