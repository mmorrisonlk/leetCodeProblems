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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let answer = 0;
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    // iterate through one level
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
    //   if (node.left.val) {
        if (node.val >= low && node.val <= high) {
            answer += node.val;
          }
    //   }
    //   if (node.right.val) {
        // if (node.right.val >= low && node.right.val <= high) {
        //     answer += node.right.val;
        //   }
    //   }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return answer;
};

rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15);

// var rangeSumBST = function(root, low, high) {
//     let answer = 0;

//     summonerBST(root);

//     return answer;

//     function summonerBST(node) {
//         if (!node) return 0;

//         const left = summonerBST(node.left);
//         const right = summonerBST(node.right);

//         if (left >= low && left <= high) {
//             answer += left
//         }
//         if (right >= low && right <= high) {
//            answer += right
//        }

//     }
// };
