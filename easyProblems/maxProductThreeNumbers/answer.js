function find_largest_combination(numbers)
{
  var largest = -Infinity;
  for (var i = 0; i < numbers.length - 2; ++i) {
    for (var j = i + 1; j < numbers.length - 1; ++j) {
      for (var k = j + 1; k < numbers.length; ++k) {
        largest = Math.max(largest, numbers[i] * numbers[j] * numbers[k]);
      }
    }
  }
  return largest;
}

console.log(find_largest_combination([-100,-98,-1,2,3,4]));

//Graciously gifted to me from Septhir as recompense for my suffering