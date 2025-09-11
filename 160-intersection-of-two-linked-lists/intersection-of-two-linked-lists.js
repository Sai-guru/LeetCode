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

      let curr = headB;
      let a = headA;

    let set =  new Set();
// store the whole B into the set first
    while(curr){
        set.add(curr);
        curr =  curr.next;
    }
    //then check whether a has that element or not ...
    while(a) {
        if(set.has(a)) {
            return a;
        }
        a = a.next;
    }return null;
};