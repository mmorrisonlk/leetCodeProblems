/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    let count = 1
    let seated = []
    for (let i = 0; i < seats.length; i++) {
        if(seats[i] === 1) {
            seated.push(i)
        }
    }
    if(seated.length === 1) {
        count = seated[0] - 0
        if(seats.length - seated[0] > count){
            count = seats.length - 1 - seated[0]
        }
    }
    else{
        console.log("seated", seated)
        if(seated[0] - 0 > count){
            count = seated[0] - 0
        }
        for (let i = 0, j=1; j < seated.length; i++, j++) {
            let midDif = Math.floor((seated[j] - seated[i])/2)
            console.log("midDif", midDif)
            if(midDif > count){
                count = midDif
            }
        }
        let botDif = (seats.length - 1) - seated[seated.length - 1]
        console.log("botdif", botDif)
        if(botDif > count){
            count = botDif
        }
    }
    // console.log(seated)
    // console.log(count)
    return count
};

maxDistToClosest([1,0,0,0,1,0,1])
maxDistToClosest([1,0,0,0])
maxDistToClosest([0,1])
maxDistToClosest([1,0,0,1])
maxDistToClosest([0,1,1,1,0,0,1,0,0])
