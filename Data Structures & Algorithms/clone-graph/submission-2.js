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
        if (!node){
            return node;
        }
        const stack = [node];
        const nodeMap = new Map();
        nodeMap.set(node, new Node(node.val));
        while (stack.length) {
            const curr = stack.pop();
            for (const neighbor of curr.neighbors) {
                if (!nodeMap.has(neighbor)) {
                    stack.push(neighbor);
                    nodeMap.set(neighbor, new Node(neighbor.val))
                }               
                nodeMap.get(curr).neighbors.push(nodeMap.get(neighbor));
            }
        }
        return nodeMap.get(node);
    }
}
