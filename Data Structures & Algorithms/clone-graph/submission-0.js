/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }

        const res = new Map();
        res.set(node, new Node(node.val))
        const stack = [node];

        while (stack.length) {
            const curr = stack.pop();
            for (const neighbor of curr.neighbors) {
                if (!res.has(neighbor)) {
                    stack.push(neighbor);
                    res.set(neighbor, new Node(neighbor.val));
                }
                res.get(curr).neighbors.push(res.get(neighbor))
            }
        }
        return res.get(node);
    }
}
