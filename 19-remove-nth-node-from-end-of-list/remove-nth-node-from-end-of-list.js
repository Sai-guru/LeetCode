/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let senti = new ListNode();
    senti.next = head;
    let first = second = senti;
    
//reach that end first , then from there
    for(let i=0;i<=n;i++){
        first = first.next;
    }

  // we can easilt track and go ....
    while(first) {
        first = first.next;
        second =  second.next;
    }
    second.next = second.next.next;
    return senti.next;


}; 