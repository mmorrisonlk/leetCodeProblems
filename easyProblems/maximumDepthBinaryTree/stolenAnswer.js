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
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root == null)    return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

maxDepth([3,9,20,null,null,15,7])
maxDepth([1,null,2])

// Stolen because I feel like this should be more complicated https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1769538/Beginner-friendly-JavaScript-Solution