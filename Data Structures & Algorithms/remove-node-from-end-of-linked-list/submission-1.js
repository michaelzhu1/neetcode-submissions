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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode();
        dummy.next = head;
        let fast = head;
        while (n > 1) {
            fast = fast.next;
            n--;
        }
        let slow = dummy;
        
        while (fast && fast.next) {
            fast = fast.next;
            slow = slow.next;
        }
        if (slow.next) {
            slow.next = slow.next.next;
        }
        return dummy.next;
    }
}
