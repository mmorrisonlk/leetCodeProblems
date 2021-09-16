var countNegatives = function (grid) {
  let answer = 0;
  let negatives = grid.flat();
  for (var i = 0; i < negatives.length; i++) {
    if (negatives[i] < 0) {
      answer++;
    }
  }

  console.log(answer);
};

countNegatives([
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
]);
