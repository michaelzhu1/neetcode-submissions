/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        let extraOne = false;
        while (l1 || l2) {
            let firstNum = l1 ? l1.val : 0;
            let secondNum = l2 ? l2.val : 0;
            let total = firstNum + secondNum;
            if (extraOne) {
                total++;
                extraOne = false;
            }
            let newNode;
            if (total < 10) {
                newNode = new ListNode(total);
            } else {
                const remainder = total % 10;
                newNode = new ListNode(remainder);
                extraOne = true;

            }
            curr.next = newNode;
            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        if (extraOne && !l1 && !l2) {
            const lastNode = new ListNode(1);
            curr.next = lastNode;
        }
        return dummy.next;
    }
}
