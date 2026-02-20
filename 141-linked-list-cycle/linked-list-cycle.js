/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


var hasCycle = function(head) {
    
    // let curr = head;
    // let set = new Set();

    // while(curr) {
    //     if(set.has(curr)) return true;
        
    //     set.add(curr);
    //     curr = curr.next;
        
    // }
    // return false;

    //Approach 2 - Floyd's cycle

    if(!head) return false;

    let slow = head;
    let fast = head.next;

    while(slow!=fast){

        if(!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }

    return true;

    


};



