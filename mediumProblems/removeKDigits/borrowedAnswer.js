var removeKdigits = function(num, k) {
    if(num.length===k)return '0';
    
    const stack=[];
    
    for(let i=0;i<num.length;i++){
        while(k&&stack.length>0&&stack[stack.length-1]>num[i]){
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    while(k--){
        stack.pop()
    }
    while(stack[0]==="0"&&stack.length>1){
        stack.shift()
    }
    return stack.join('')
};

// stolen from https://leetcode.com/problems/remove-k-digits/discuss/1141930/JS-Easy-to-understand-for-beginners-as-well(comments)