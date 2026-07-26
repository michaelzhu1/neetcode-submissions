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
    diameterOfBinaryTree(root) {
        if (!root) {
            return 0;
        }
        let maxDiameter = 0;
        const stack = [root];
        while (stack.length) {
            const node = stack.pop();


            if (node) {
                const leftHeight = this.heightOfTree(node.left);
                const rightHeight = this.heightOfTree(node.right);
                maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
                stack.push(node.right);
                stack.push(node.left);
            }
        }
        return maxDiameter;
    }

    heightOfTree(root) {
        if (!root) {
            return 0;
        }
        const stack = [[root, 1]];
        let maxHeight = 0;
        while (stack.length) {
            const current = stack.pop();
            const node = current[0];
            const depth = current[1];
            if (node) {
                maxHeight = Math.max(maxHeight, depth);
                stack.push([node.right, depth + 1]);
                stack.push([node.left, depth + 1]);
            }
        }
        return maxHeight;
    }
}
