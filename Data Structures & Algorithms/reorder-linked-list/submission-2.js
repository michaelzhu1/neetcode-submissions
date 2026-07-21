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
     * @return {void}
     */
    reorderList(head) {
        // first split the list into two parts
        let slow = head;
        let fast = head;
        let count = 0;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            count++;
        }
        let prev = null;
        let curr;
        if (count % 2) {
            curr = slow;
        } else {
            curr = slow.next;
            slow.next = null;
        }
        
        // then reverse the second half of the linked list
        while (curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // then intertwine the first half and second half of the reversed list
        let front = head;
        let back = prev;
        const dummy = new ListNode();
        dummy.next = head;
        
        while (front && back) {
            const frontTemp = front.next;
            front.next = back;
            const backTemp = back.next;
            back.next = frontTemp;
            front = frontTemp;
            back = backTemp;
        }
        return dummy.next;
    }
}
