/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {

    let mapTest = new Map();

    function adder(a, n) {
        if(n <= 0)
            return 0;
        return (adder(a, n-1) + a[n-1])
    }

    function arrayBuilder(value, index) {
        let array = [value]
        for (let j = 0; j < nums.length; j++) {
            if (j === index) {
                continue
            }
            let k = nums.length
            while (k != 0) {
                array.push(adder(nums, k - 1))
                k--
            }
        }
        mapTest.set(index, array)   
    }

    function runner() {
        for (let i = 0; i < nums.length; i++) {
            arrayBuilder(nums[i], i)
        }
    }



    runner()

    console.log(mapTest)

};

canPartition([1,5,11,5])

// canPartition([1,2,3,5])