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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        const dummy = new TreeNode();
        dummy.left = root;
        let curr = root;
        let parent = dummy;
        while (curr && curr.val !== key) {
            parent = curr;
            if (key < curr.val) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        if (!curr) {
            return dummy.left;
        }

        // case 1 and 2 where the node has 0 or 1 child
        if (!curr.left || !curr.right) {
            const child = curr.left || curr.right;
            if (parent.left === curr) {
                parent.left = child;
            } else {
                parent.right = child;
            }
            return dummy.left;
        }

        // case 3 node has 2 children, find the inorder successor, which is 
        // the smallest node in the right subtree
        let successorParent = curr;
        let successor = curr.right;
        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }
        curr.val = successor.val;

        if (successorParent.left === successor) {
            successorParent.left = successor.right;
        } else {
            successorParent.right = successor.right;
        }
        return dummy.left;
    }
}
