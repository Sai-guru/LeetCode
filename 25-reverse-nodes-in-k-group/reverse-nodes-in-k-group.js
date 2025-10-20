/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupTail = dummy, curr = head;

    while (true) {
        // Check if there are at least k nodes left
        let groupEnd = curr, count = 0;
        while (count < k && groupEnd) {
            groupEnd = groupEnd.next;
            count++;
        }
        if (count < k) break;

        // Reverse the current group
        let prev = groupEnd, groupStart = curr;
        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect the previous group to the reversed group
        prevGroupTail.next = prev;
        prevGroupTail = groupStart;
    }

    return dummy.next;
};