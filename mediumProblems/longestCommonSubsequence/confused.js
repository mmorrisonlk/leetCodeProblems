/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  var firstSet = new Set();
  var secondSet = new Set();

  for (i = 0; i < text1.length; i++) {
    firstSet.add(text1.charAt(i));
  }
  for (i = 0; i < text2.length; i++) {
    secondSet.add(text2.charAt(i));
  }

  var setIterator = firstSet.values();
  var goalLetters = new Set();

  for (let i = 0; i < firstSet.size; i++) {
    var rightNow = setIterator.next().value;
    if (secondSet.has(rightNow)) {
      goalLetters.add(rightNow);
    }
  }

  let x = 0;
  let y = 0;
  let answer = 0;

  var yFinder = function (x) {
    let target = x;
    let looper = y;
    for (looper; looper < text2.length; looper++) {
      if (text2.charAt(looper) == target) {
        console.log("looper", text2.charAt(looper));
        y = looper + 1;
        answer++;
        return;
      }
    }
    return;
  };

  var runner = function() {
    while (x < text1.length) {
        if (goalLetters.has(text1.charAt(x))) {
        let target = text1.charAt(x);
        console.log(text1.charAt(x));
        x++;
        yFinder(target);
        }
    x++;
  }
  return
}

  runner()

  let tempAnswer = answer;
  answer = 0;
  x = 0;
  y = 0;
  text1 = text1.split("").reverse().join("");

  runner()

  // return answer

  console.log(firstSet);
  console.log(secondSet);
  console.log(goalLetters);
  console.log("answer", answer);
  console.log("temp answer", tempAnswer);
};

// longestCommonSubsequence("abcde", "ace")
// longestCommonSubsequence("abc", "acedb")
// longestCommonSubsequence("psnw", "vozsh")
// longestCommonSubsequence("ezupkr", "ubmrapg")
// longestCommonSubsequence("bsbininm", "jmjkbkjkv")
longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy");
// longestCommonSubsequence("bsbininm", "jmjkbkjkv")

// let tempAnswer = answer
// answer, x, y = 0
// text1 = text1.split('').reverse().join('')

// while (x < text1.length) {
//     if (goalLetters.has(text1.charAt(x))) {
//         let target = text1.charAt(x)
//         console.log(text1.charAt(x))
//         yFinder(target)
//     }
//     x++
// }
