/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let answer = [];
  let map = new Map();
  let map2 = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        map.set(nums2[j], j);
        map2.set(j, nums2[j]);
      }
    }
  }
  if (map2.size < 4) {
    for (const value of map2.values()) {
        answer.push(value);
      }
  } else {
    for (const value of map.values()) {
      if (map2.has(value) == true) {
        answer.push(map2.get(value));
      }
    }
  }
  console.log("map1", map);
  console.log("map2", map2);
  console.log(answer);
  return answer;
};

//Throwing in the towel I was going the wrong direction

// intersect([1, 2, 2, 1], [2, 2]);
intersect([4, 9, 5], [9, 4, 9, 8, 4]);
// intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81],
// [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48])
