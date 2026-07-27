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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // If subRoot is empty, then it's already a subtree by default
        if (!subRoot) {
            return true;
        }
        // If root is empty, then there is no way subRoot can be subtree of root
        if (!root) {
            return false;
        }
        // First check if the trees starting at these two nodes are identical
        if (this.isSameTree(root, subRoot)) {
            return true;
        }
        // Lastly, check if left side and right side for both trees are the same
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        }
        if (p.val !== q.val) {
            return false;
        }
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
