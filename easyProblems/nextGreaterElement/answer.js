/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let array = nums1
    let yarra = nums2

    var firstSearch = function() {
        for (let i = 0; i < array.length; i++) {
            array[i] = secondSearch(nums1[i])
            
        }
    }

    var secondSearch = function(target) {
        let goal = target
        let found = -1
        let hold = false
        for (let i = 0; i < yarra.length; i++) {
            if (hold == true && yarra[i] > goal) {
                found = yarra[i]
                return found
            }
            if (yarra[i] == goal) {
                hold = true
            }
        }
        return found
    }

    firstSearch()
    return nums1
};


nextGreaterElement([4,1,2],[1,3,4,2])