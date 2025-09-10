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
     
    //  let arr = [];
    // let curr =  head;
    // while(curr) {
    //     arr.push(curr.val);
    //     curr =  curr.next;
    // }
    // // let newArr = [...arr];
    // let newArr = [...arr].reverse(); 
    // // let n =  newArr.length;
    // // for(let i=0;i<Math.floor(n/2);i++) {
    // //     let temp = newArr[i];
    // //     newArr[i] = newArr[n-(i+1)];
    // //     newArr[n-(i+1)] = temp;
    // // }
    //   return arr.join() === newArr.join();

    //1st : find the middle
    let slow = fast = head;
    while(fast && fast.next) {
        slow =  slow.next;
        fast =  fast.next.next;
    } //now slow the middle node(element)

    //2nd : Reverse the 2nd half of the linked list

    let prev = null;
    let curr = slow;
    while(curr) {
        let temp =  curr.next;
        curr.next =  prev;
        prev = curr;
        curr = temp;
    }   //now prev is the end of the whole linked list OR 
    // we can say as head of the reversed 2nd half ll


    //3rd : compare the both from head and end and reach near to check this ...

    let firstll =  head;
    let secondll =  prev;

    while(secondll) {
        if(firstll.val !=  secondll.val) return false;

        firstll = firstll.next;
        secondll = secondll.next;

    } return true;




















};