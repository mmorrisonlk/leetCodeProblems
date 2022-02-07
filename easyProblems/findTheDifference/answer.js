var findTheDifference = function (s, t) {
  let mapOfExtantCharacters = new Map();
  let mapOfPotentialExtras = new Map();
  let answer;

  for (let i = 0; i < s.length; i++) {
    if (mapOfExtantCharacters.has(s.charAt(i))) {
      mapOfExtantCharacters.set(
        s.charAt(i),
        mapOfExtantCharacters.get(s.charAt(i)) + 1
      );
    } else {
      mapOfExtantCharacters.set(s.charAt(i), 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (mapOfPotentialExtras.has(t.charAt(j))) {
      mapOfPotentialExtras.set(
        t.charAt(j),
        mapOfPotentialExtras.get(t.charAt(j)) + 1
      );
    } else {
      mapOfPotentialExtras.set(t.charAt(j), 1);
    }
    if (!mapOfExtantCharacters.has(t.charAt(j))) {
      answer = t.charAt(j);
      return answer;
    }
    if (
      mapOfExtantCharacters.get(t.charAt(j)) <
      mapOfPotentialExtras.get(t.charAt(j))
    ) {
      answer = t.charAt(j);
      return answer;
    }
  }

  console.log(mapOfExtantCharacters);
  console.log(mapOfPotentialExtras);
  console.log(answer);
};

findTheDifference("abcd", "abcde");
findTheDifference("", "y");
