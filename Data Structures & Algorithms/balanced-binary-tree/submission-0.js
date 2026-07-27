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
    isBalanced(root) {
        if (!root) {
            return true;
        }
        const leftTree = this.treeHeight(root.left);
        const rightTree = this.treeHeight(root.right);
        if (Math.abs(leftTree - rightTree) > 1) {
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    treeHeight(root) {
        if (!root) {
            return 0
        }
        const left = this.treeHeight(root.left);
        const right = this.treeHeight(root.right);
        return 1 + Math.max(left, right)
    }
}
