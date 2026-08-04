/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const stack = [[root, root.val]];
        let count = 0;
        while (stack.length) {
            const [curr, maxSoFar] = stack.pop();
            if (curr.val >= maxSoFar) {
                count++;
            }
            const newMax = Math.max(maxSoFar, curr.val);
            if (curr.right) {
                stack.push([curr.right, newMax]);
            }
            if (curr.left) {
                stack.push([curr.left, newMax]);
            }
        }
        return count;
    }
}
