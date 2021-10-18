/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    const queue = [root];
    while (queue.length) {
      const size = queue.length;
      let foundX = false;
      let foundY = false;
      // iterate through one level
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        // check if children are x and y
        if (node.left && node.right) {
          if (
            (node.left.val === x && node.right.val === y) ||
            (node.left.val === y && node.right.val === x)
          )
            return false;
        }
        // find x and y at the same level
        if (node.val === x) foundX = true;
        if (node.val === y) foundY = true;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      if (foundX && foundY) return true;
    }
    return false;
  };

isCousins([1,2,3,4], 4, 3)

// I am a sham and borrowed code again. I'm still struggling to wrap my head around how binary trees work
// Code Source https://leetcode.com/problems/cousins-in-binary-tree/discuss/514578/JavaScript-iterative-BFS-solution