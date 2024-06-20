var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let l = 1, r = position[position.length - 1] - position[0];
    let ans = -1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let lastPosition = position[0], balls = 1;
        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= mid) {
                lastPosition = position[i];
                balls++;
            }
        }
        if (balls >= m) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
};