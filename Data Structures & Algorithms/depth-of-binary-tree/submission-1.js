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
    maxDepth(root) {
        if (!root) {
            return 0;
        }
        const stack = [[root, 1]];
        let res = 0;
        while (stack.length) {
            const last = stack.pop();
            const node = last[0];
            const depth = last[1];
            if (node) {
                res = Math.max(res, depth);

                stack.push([node.right, depth + 1]);
                stack.push([node.left, depth + 1]);
            }

        }
        return res;
    }
}
