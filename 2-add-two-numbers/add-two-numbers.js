/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let res = new ListNode(0);
    let resHead = res;


    while(l1||l2||carry) {
        let sum = (l1? l1.val : 0) + (l2 ? l2.val : 0)+ carry;
        carry = Math.floor(sum/10);
        let digit = sum%10;

        let newNode = new ListNode(digit);
        res.next = newNode;
        res = res.next

//  ---see next line---
        // what if l1 or l2 doesn't exist (means ended the size)
        l1 = l1?.next;
        l2 = l2?.next;

        // l1 = l1 && l1.next;
        // l2 = l2 && l2.next;
    }
    return resHead.next;

};