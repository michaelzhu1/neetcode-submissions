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
            // go to the left most node
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            // curr was null after the while loop, so we need to assign 
            // curr to the latest node
            curr = stack.pop();
            
            // prev val was the lower tree node we just visisted, so its 
            // its value must be lower than current value we are checking
            if (curr.val <= prev) {
                return false;
            }
            prev = curr.val;
            // need to go to the right subtree
            curr = curr.right;
        }
        return true;
    }
}
