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
//  ----my weird idea---

    // let size = 0;
    // let curr = head;

    // while(curr) {
    //     size++;
    //     curr = curr.next;
    // }

    // if(n==size) return head.next;
    // curr = head;
    // for(let i=0;i<size-(n+1);i++) {
    //     curr = curr.next;
    // }
    // curr.next = curr.next.next;
    // return head;

// ---almost same as above , just used senti and place standing ..
 // same as above , but just for making senti;

    // let senti = new ListNode();
    // senti.next = head;
    // let prev = senti;
    // let curr = head;
    // let size = 0;

    // while(curr) {
    //     size++;
    //     curr = curr.next;
    // }
    // if(n==size) return head.next;
    // let prevOfTarget = size-n;

    // for(let i=0;i<prevOfTarget;i++) {
    //     prev = prev.next;
    // }

    // prev.next = prev.next.next;
    // return head;

var removeNthFromEnd = function(head, n) {

    let senti = new ListNode();
    senti.next = head;

    let first = second = senti;

    // Now reach the prevTarget by first ptr

    // for(let i=0;i<n;i++) {
    //     first= first.next;
    // }  // both loops works use any of them //
    while(n!=0){
        first= first.next;
        n--;
        
    }
   //now after reaching , go till end  then that same
   //one step 2nd ptr will also travel;
    while(first && first.next) {
        first = first.next;
        second = second.next;

    }
    //golden line
    second.next = second.next.next;
    return senti.next;


   




    


}; 