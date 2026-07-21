// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // first pass to create a new deep copy of the linked list without random pointer
        const nodeMap = new Map();
        const dummy = new Node(0);
        let copiedTail = dummy;
        let curr = head;  
        while (curr) {
            const newNode = new Node(curr.val);
            nodeMap.set(curr, newNode)
            copiedTail.next = newNode;
            curr = curr.next;
            copiedTail = copiedTail.next;
        }

        curr = head;
        let copiedCurr = dummy.next;

        // second pass to assign the random pointers for each nodes
        while (curr) {
            if (curr.random) {
                copiedCurr.random = nodeMap.get(curr.random);
            } else {
                copiedCurr.random = null;
            }
            curr = curr.next;
            copiedCurr = copiedCurr.next;
        }
        return dummy.next;
    }
}
