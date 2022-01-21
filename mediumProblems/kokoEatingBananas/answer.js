/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = 1;
  for (const pile of piles) {
    right = Math.max(right, pile);
  }

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    let hourSpent = 0;

    for (const pile of piles) {
      hourSpent += Math.ceil(pile / middle);
    }

    if (hourSpent <= h) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};
minEatingSpeed([3, 6, 7, 11], 8);
minEatingSpeed([30, 11, 23, 4, 20], 5);
minEatingSpeed([30, 11, 23, 4, 20], 6);

// const reducer = (previousValue, currentValue) => previousValue + currentValue
// console.log(piles.reduce(reducer))
