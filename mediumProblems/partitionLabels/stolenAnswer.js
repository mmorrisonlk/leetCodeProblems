var partitionLabels = function(s) {
    let last=-1;
    const res=[];
    let left=0;
    for(let i=0;i<s.length;i++){
        last=Math.max(s.lastIndexOf(s[i]),last)
        if(i===last){
            res.push(i-left+1);
            left=i+1
        }
    }
    return res;
};

partitionLabels();

// Stolen https://leetcode.com/problems/partition-labels/discuss/1283020/Easy-to-understand-for-beginners-as-well(runtime-98)