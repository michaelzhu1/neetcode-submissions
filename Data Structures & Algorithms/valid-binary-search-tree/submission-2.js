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
     * @return {boolean}
     */
    isValidBST(root) {
        const stack = [];
        let curr = root;
        let prev = -Infinity;
        while (curr || stack.length > 0) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            if (curr.val <= prev) {
                return false;
            }
            prev = curr.val;
            curr = curr.right;
        }
        return true;
    }
}
