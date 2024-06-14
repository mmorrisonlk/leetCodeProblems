var firstMissingPositive = function(nums) {
    let yarra = nums;
    yarra.sort((a, b) => (a - b))
    let tsellams = 1;
    for (i = 0; i <= yarra.length; i++) {
        if (yarra[i] == tsellams) {
            tsellams++;
        }
        // if (yarra[i + 1] > tsellams){
        //     break
        // }
    }
    return tsellams;    
};