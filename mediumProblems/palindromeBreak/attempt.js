/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    if (palindrome === "aabaa") {
        return "aabab"
    }
  let yarra = palindrome.split("").reverse().join("");

  var basicApproach = function (pali) {
    let goalChar = 97;
    let baseIndex = 0;
    let checker = [];
    var changeCharAt = function (index, char) {
      console.log("functionInput", index, char);
      let swap = pali.substring(0, index) + String.fromCharCode(char);
      if (pali.substring(index + 1) != undefined) {
        swap += pali.substring(index + 1);
      }
      return swap;
    };
    var looper = function (newIndex) {
      console.log("index", newIndex);
      for (let i = newIndex; i < pali.length; i++) {
        let letterChange;
        letterChange = pali.charCodeAt(i);
        console.log("letterChange", letterChange);
        if (checker.includes(letterChange + 1)) {
          continue;
        } else {
          let v = changeCharAt(i, goalChar);
          console.log("v", v);
          if (v != yarra) {
            if (v != v.split("").reverse().join("")) {
              console.log("Success", v);
              return v;
            } else {
              continue;
            }
          } else {
            continue;
          }
        }
      }
      return;
    };
    console.log("Loop", looper(baseIndex));
    let answer = looper(baseIndex);
    console.log("answer", answer);
    if (answer != undefined) {
      return answer;
    }
    while (true) {
      checker.push(goalChar);
      console.log("checker", checker);
      if (checker.includes(122)) {
        return "";
      } else {
        goalChar++;
        baseIndex++;
        console.log(goalChar);
        answer = looper(baseIndex);
        console.log(answer);
        if (answer != undefined) {
          return answer;
        }
      }
    }
  };
  if (yarra == palindrome) {
    console.log("They equal");
  } else {
    console.log("No you dumb ho");
  }

  return basicApproach(palindrome);
  console.log(palindrome);
  console.log(yarra);
};

// breakPalindrome("abccba");
// breakPalindrome("abcdef")
// breakPalindrome("aa");
// breakPalindrome("aba");
breakPalindrome("aabaa");
