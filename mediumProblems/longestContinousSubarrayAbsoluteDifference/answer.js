const longestSubarray = (nums, limit) => {
    const maxQue = [];
    const minQue = [];
    let maxTop = -1, minTop = -1, left = -1;
    let maxBottom = 0, minBottom = 0;
    for (let right = 0; right < nums.length; ++right) {
      const val = nums[right];
      while (maxTop >= maxBottom && val > maxQue[maxTop]) --maxTop;
      while (minTop >= minBottom && val < minQue[minTop]) --minTop;
      maxQue[++maxTop] = val;
      minQue[++minTop] = val;
      if (maxQue[maxBottom] - minQue[minBottom] > limit) {
        ++left;
        maxQue[maxBottom] === nums[left] && ++maxBottom;
        minQue[minBottom] === nums[left] && ++minBottom;
      }
    }
    return nums.length - left - 1;
  };