var findPairs = function(arrayOfValuesToCheck, goalDifferenceBetweenValues) {
    // Renaming the variables in the question for my own sanity and organization

    // It almost seems like you could use a Set instead of Map but there is at least one scenario where that 
    // causes problems so one Map just simplifies the process
    let mapOfUniqueValueAndQuantity = new Map();
    // Answer variable
    let uniqueCombinationsFound = 0;

    // This rules out gotcha scenarios where nothing can possibly satisfy the conditions:
    //      1) There is only a single value in the array so nothing to subtract against
    //      2) The goal difference is negative which is impossible since we want the absolute value of the difference
    if(arrayOfValuesToCheck.length === 0 || goalDifferenceBetweenValues < 0) return uniqueCombinationsFound

    // This for loop goes through the entire array noting which values appear and how many times they appear
    // If get() returns nothing then it will set the quantity to 1 and then after it will increment that value
    // since the get() will now return a quantity for the queried value
	for(valueChecked of arrayOfValuesToCheck){
		mapOfUniqueValueAndQuantity.set(valueChecked,(mapOfUniqueValueAndQuantity.get(valueChecked)+1) || 1)
	}

    // Now to go back through the map checking for the desired values
    mapOfUniqueValueAndQuantity.forEach((numberOfTimesValueAppeared, uniqueValues) =>{ 
        // This scenario covers for the goal difference being 0 meaning that it wants every value that appears
        // more then once in the array. This is the scenario that complicates using a Set() instead of a Map()
        if(goalDifferenceBetweenValues === 0) { 
            // If it has appeared more then once then that means x - x = 0 is an option so increment the counter
            if(numberOfTimesValueAppeared > 1) { 
                uniqueCombinationsFound++
            }
        }
        else {
            // If the goal difference isn't 0 then we want to check for inverses. This streamlines the process
            // Take each value in our Map, add the goal difference to that, if that value exists in our map then
            // we necessarily have two values that can subtract to get the goal difference and we increment the counter
            if(mapOfUniqueValueAndQuantity.has(uniqueValues + goalDifferenceBetweenValues)) {
                uniqueCombinationsFound++;
            }
        }
    })

    return uniqueCombinationsFound;
};

// interpreted from anonymous 88ms solution. Wish I could credit better

findPairs([3,1,4,1,5], 2)
findPairs([1,2,3,4,5], 1)
findPairs([1,3,1,5,4], 0)
// findPairs([1,2,4,4,3,3,0,9,2,3], 3)
// findPairs([6,3,5,7,2,3,3,8,2,4], 2)