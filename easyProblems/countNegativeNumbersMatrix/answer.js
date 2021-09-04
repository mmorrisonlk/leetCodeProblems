var countNegatives = function (grid) {
  let answer = 0;
  console.log(grid)
  negativeArray(grid);
  function negativeArray(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      if (Array.isArray(matrix[i])) {
          console.log("Postive", matrix[i])
        negativeArray(matrix[i]);
      } else if (matrix[i] < 0) {
        console.log("Negative", matrix[i])
        answer++
      }
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

//Praise be to blessed stackoverflow for the starter https://stackoverflow.com/questions/15854425/iterate-over-a-javascript-array-without-using-nested-for-loops/15854485#15854485