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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let left;
        let right;
        if (p && q) {
            if (p.val !== q.val) {
                return false;
            }
            left = this.isSameTree(p.left, q.left);
            right = this.isSameTree(p.right, q.right)
        } else if (p && !q || !p && q) {
            return false;
        } else if (!p && !q) {
            return true;
        }
        return left && right;
    }
}
