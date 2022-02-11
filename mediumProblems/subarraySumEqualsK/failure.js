var subarraySum = function(arrayOfGivenIntegers, goalSum) {
    let continuousSubarraysFound = 0;
    let lengthOfArrayZeroAdjusted = arrayOfGivenIntegers.length - 1;
    let leftViewPort = 0;
    let rightViewPort = 0;
    let currentValueBetweenPorts = 0;

    let sumReducerFunction = (previousValue, currentValue) => previousValue + currentValue;

    function moveRight() {
        if (rightViewPort === lengthOfArrayZeroAdjusted) {
            moveLeft()
            return
        }
        else {
            rightViewPort++
            evaluator()
            return
        }
    }

    function moveLeft() {
        if (leftViewPort === lengthOfArrayZeroAdjusted) {
            evaluator()
            return
        }
        else {
            leftViewPort++
            evaluator()
            return
        }
    }

    function evaluator() {
        if (leftViewPort === rightViewPort) {
            currentValueBetweenPorts = arrayOfGivenIntegers[leftViewPort]
        }
        else if (rightViewPort === lengthOfArrayZeroAdjusted) {
            currentValueBetweenPorts = arrayOfGivenIntegers.slice(leftViewPort, lengthOfArrayZeroAdjusted + 1).reduce(sumReducerFunction)
        }
        else {
            currentValueBetweenPorts = arrayOfGivenIntegers.slice(leftViewPort, rightViewPort + 1).reduce(sumReducerFunction)
        }
        console.log(currentValueBetweenPorts, leftViewPort, rightViewPort, continuousSubarraysFound)
        if (currentValueBetweenPorts === goalSum) {
            console.log("found")
            continuousSubarraysFound++
            if (rightViewPort === lengthOfArrayZeroAdjusted && leftViewPort === lengthOfArrayZeroAdjusted) {
                console.log("Final")
                return
            }
            else if (rightViewPort === lengthOfArrayZeroAdjusted) {
                console.log("Huh")
                moveLeft()
                return
            }
            else {
                console.log("what?")
                moveRight()
                return
            }
        }
        if (rightViewPort === lengthOfArrayZeroAdjusted && leftViewPort === lengthOfArrayZeroAdjusted) {
            console.log("Final")
            return
        }
        if (currentValueBetweenPorts !== goalSum) {
            console.log("Going Right")
            moveRight()
            return
        }
        if (currentValueBetweenPorts >= goalSum) {
            console.log("Going Left")
            moveLeft()
            return
        }
    }

    evaluator()

    console.log(continuousSubarraysFound)

    return continuousSubarraysFound
};

// subarraySum([1,1,1], 2)
// subarraySum([1,2,3], 3)
// subarraySum([-1,-1,1], 0)
subarraySum([1,-1,0], 0)