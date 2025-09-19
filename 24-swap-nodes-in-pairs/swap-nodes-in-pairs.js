/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(!head) return head;

    let dummyNode = new ListNode();
    dummyNode.next = head;
    let curr =  dummyNode;

    while(curr.next && curr.next.next) {
        let first  = curr.next;
        let second = curr.next.next;
        let temp = second.next;

        curr.next = second;
        second.next = first;
        first.next = temp;

        curr = first;
        
    }
    return dummyNode.next;
    
};