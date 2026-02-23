/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    let senti = new ListNode();
    senti.next = head;
    let prev = senti;
    let curr = head;

    while(curr){
        if(curr.val == val) {
            prev.next = prev.next.next;
            curr = curr.next;
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    return senti.next;

    
};

