var buddyStrings = function(s, goal) {
    let len = s.length
    if(len !== goal.length) console.log("false")
    let arr = []
    let set = new Set()
    for(let i = 0; i < len; i++) {
        set.add(s[i])
        console.log(set)
        if(s[i] !== goal[i]) arr.push([s[i], goal[i]])
        console.log(arr.length)
        console.log(arr)
    }
    if(arr.length === 2) {
        if(arr[0].join('') === arr[1].reverse().join('')) 
        console.log("true")
    }
    if(arr.length === 0) {
        if(len > set.size)
        console.log("true")
    }
    
    console.log("false")
};

buddyStrings("bacc", "aaec");

//Borrowed this solution because mine timed out https://leetcode.com/problems/buddy-strings/discuss/1309402/beat-95