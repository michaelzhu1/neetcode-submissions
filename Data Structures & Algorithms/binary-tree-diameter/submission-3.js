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

        // Stores the computed height for each node
        const heights = new Map();

        const stack = [[root, false]];
        while (stack.length) {
            const [node, visited] = stack.pop();
            if (!node) {
                continue;
            }
            if (!visited) {
                // Process this node AFTER its children
                stack.push([node, true]);

                // Push right then left so left is processed first
                stack.push([node.right, false]);
                stack.push([node.left, false]);
            } else {
                // Heights were already computed for both children
                const leftHeight = heights.get(node.left) || 0;
                const rightHeight = heights.get(node.right) || 0;

                maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight)
                heights.set(node, 1 + Math.max(leftHeight, rightHeight))
            }
        }
        return maxDiameter;
    }
}
