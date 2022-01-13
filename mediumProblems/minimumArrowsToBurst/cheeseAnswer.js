/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    points.sort((a,b) => a[1] - b[1]);

    let arrows = 1;
    let end = points[0][1];
    for (let ballon of points) {
        if(ballon[0] > end){
            end = ballon[1];
            arrows++;
        }
    }
    
    return arrows;

};

// Solution found here https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/discuss/1686261/Javascript-solution

findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])
findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])
findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])