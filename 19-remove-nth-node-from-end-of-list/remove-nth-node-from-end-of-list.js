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

    let prev  = senti;
    let curr = head;
    let size = 0;
    
    while(curr) {
        size++;
        curr =  curr.next;
    }

    if(size==n) return head.next;

  //now calculate the prev pos...
    let prevOfTarget = size-n;

   for(let i=0;i<prevOfTarget;i++) {
    prev =  prev.next;
   }
   prev.next =  prev.next.next;
   return head;



};