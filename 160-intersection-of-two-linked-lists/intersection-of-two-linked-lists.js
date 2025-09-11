/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
     if (!headA || !headB) return null;

    let curr =  headA;
    let target =  headB;

    while(curr !== target) {
        // curr = curr.next;
        // target = target.next;
 if (curr) {
            curr = curr.next;
        } else {
            curr = headB;
        }

        if (target) {
            target = target.next;
        } else {
            target = headA;
        }
    }
    return curr;
    
};