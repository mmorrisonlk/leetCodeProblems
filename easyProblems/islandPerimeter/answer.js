/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let map = grid;
  let x = 0;
  let y = 0;
  let answer = 0;
  var islandSearch = function (sinbad) {
    for (let i = 0; i < sinbad.length; i++) {
      if (Array.isArray(sinbad[i])) {
        islandSearch(sinbad[i]);
      } else {
        if (sinbad[i] == 1) {
          landHo(y, x);
        }
        console.log("y, x", y, x);
        x++;
      }
    }
    console.log("y,x", y, x);
    y++;
    x = 0;
  };

  var landHo = function (ynnari, xenos) {
    console.log("land ho");
    console.log("land ho");
    if (map[ynnari - 1] == undefined) {
      answer++;
    }
    if (map[ynnari - 1] != undefined) {
      if (map[ynnari - 1][xenos] == 0) {
        answer++;
      }
    }
    if (map[ynnari][xenos + 1] == undefined) {
      answer++;
    }
    if (map[ynnari][xenos + 1] != undefined) {
      if (map[ynnari][xenos + 1] == 0) {
        answer++;
      }
    }
    if (map[ynnari + 1] == undefined) {
      answer++;
    }
    if (map[ynnari + 1] != undefined) {
      if (map[ynnari + 1][xenos] == 0) {
        answer++;
      }
    }
    if (map[ynnari][xenos - 1] == undefined) {
      answer++;
    }
    if (map[ynnari][xenos - 1] != undefined) {
      if (map[ynnari][xenos - 1] == 0) {
        answer++;
      }
    }
    console.log("middle answer", answer);
  };

  islandSearch(map);
  console.log("final answer", answer);
  return answer;
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
// [[1]]
// [[1,0]]
