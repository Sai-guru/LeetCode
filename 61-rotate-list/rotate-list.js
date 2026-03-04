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
var rotateRight = function(head, k) {

    if(!head || !head.next) return head;

    //first know the length of the LL

    let len = 0;
    let curr = head;

    while(curr) {
        len++;
        curr = curr.next;
    }

    //avoid unwanted rotates
    k = k%len;

    //our reaching logic , 
    //1st reach the place of last node using fast pointer with k 
    let fast = slow = head;

    for(let i=0;i<k;i++) {
        fast = fast.next;
    }

    //now the above last node is reached by that fast pointer
    //so , run the  fast and slow pointers , where 
    //the slow pointers will take the last node position from the fast pointer
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    //now form the cycle by fast last ptr to given head;
    //slow next pointer to newHead (bcos then only can keep the starting node)
    //then make the slow pointer next to null - bcos end of the list
    
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;

    //simply return the newHead;

    return newHead;

       
}