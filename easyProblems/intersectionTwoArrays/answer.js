var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    let intersection = [];
    let p1 = 0;
    let p2 = 0;

    while(p1 < nums1.length && p2 < nums2.length){
        if(nums1[p1] === nums2[p2]){
            intersection.push(nums1[p1]);
            p1++;
            p2++;
        } else if(nums1[p1] < nums2[p2]){
            p1++;
        } else{
            p2++;
        }    
    }

    return intersection;
};

// borrowed from https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/1469080/Simple-Solution-Javascript-(two-pointers)