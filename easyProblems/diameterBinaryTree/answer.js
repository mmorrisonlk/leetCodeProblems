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
 var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    dfs(root);
    
    return diameter;
    
    function dfs(node, level) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // update diameter at every node
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }
};

diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
// diameterOfBinaryTree([1,2])
/*
                        1
                2                    3
        4           5            6          7
    8       9   10      11    12    13  14      15
16    17
*/

// Borrowed solution since I'm still having trouble comprehending how it is transversing the tree https://leetcode.com/problems/diameter-of-binary-tree/discuss/101148/Intuitive-Javascript-Solution