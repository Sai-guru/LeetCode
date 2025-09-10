/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
     
     let arr = [];
    let curr =  head;
    while(curr) {
        arr.push(curr.val);
        curr =  curr.next;
    }
    // let newArr = [...arr];
    let newArr = [...arr].reverse(); 
    // let n =  newArr.length;
    // for(let i=0;i<Math.floor(n/2);i++) {
    //     let temp = newArr[i];
    //     newArr[i] = newArr[n-(i+1)];
    //     newArr[n-(i+1)] = temp;
    // }
      return arr.join() === newArr.join();
};