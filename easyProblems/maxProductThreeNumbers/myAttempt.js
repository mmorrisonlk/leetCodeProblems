var maximumProduct = function (nums) {
    let answers = []
    for (let i = 0; i < 3; i++) {
        var max = Math.max(...nums);
        var min = Math.floor(...nums);
        if (Math.abs(min) > Math.abs(max)) {
            answers.push(min);
            const index = nums.indexOf(min)
            if (index > -1) {
                nums.splice(index, 1)
            }
        }
        else {
            answers.push(max);
            const index = nums.indexOf(max)
            if (index > -1) {
                nums.splice(index, 1)
            }
        }
    }
    var final = answers.reduce(function (a, b) {
        return a * b;
    })
    console.log(nums);
    console.log(answers);
    console.log(final);
};

maximumProduct([-100,-2,-3, 1]);
