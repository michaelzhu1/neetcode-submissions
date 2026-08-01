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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const newNode = new TreeNode(val);
        if (!root) {
            return newNode;
        }
        let current = root;
        let prev;
        let left;
        while (current) {
            if (val > current.val) {
                prev = current;
                current = current.right;
                left = false;
            } else {
                prev = current;
                current = current.left;
                left = true;
            } 
        }
        if (left) {
            prev.left = newNode;
        } else {
            prev.right = newNode;
        }
        return root;
    }
}
