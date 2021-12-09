/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 var canReach = function(arr, start) {
    let answer = false
    let checked = []

    function check(varchar) {
        let current = varchar
        if (arr[current] == 0) {
            answer = true
            return answer
        }
        if (checked.includes(current + arr[current]) == false) {
            findPlus(current + arr[current])
        }
        if (checked.includes(current - arr[current]) == false) {
            findMinus(current - arr[current])
        }

    }

    function findPlus(plus) {
        if (arr[plus] == undefined) {
            return
        }
        else {
            checked.push(plus)
            check(plus)
        }
        
    }

    function findMinus(minus) {
        if (arr[minus] == undefined) {
            return
        }
        else {
            checked.push(minus)
            check(minus)
        }
    }

    check(start)

    return answer
};

canReach([4,2,3,0,3,1,2], 5)