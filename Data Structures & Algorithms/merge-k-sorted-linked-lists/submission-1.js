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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */


    mergeKLists(lists) {
        if (!lists.length) {
            return null;
        }
        let interval = 1;
        while (interval < lists.length) {
            for (let i = 0; i + interval < lists.length; i += interval * 2) {
                lists[i] = this.mergeTwoLists(lists[i], lists[i+interval])
            }
            interval *= 2;
        }
        return lists[0];
    }

    mergeTwoLists(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        if (l1) {
            curr.next = l1;
        } else {
            curr.next = l2;
        }
        return dummy.next;
    }
}
