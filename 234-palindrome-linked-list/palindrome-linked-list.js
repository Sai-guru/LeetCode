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

     
    // let arr = [];
    // let curr = head;
    // while(curr) {

    //     arr.push(curr.val);
    //     curr = curr.next;
    // }
    // let newArr = [...arr];
    // let n = newArr.length;

    // for(let i=0;i<Math.floor(n/2);i++) {
    //     let temp = newArr[i];
    //     newArr[i] = newArr[n-(i+1)];
    //     newArr[n-(i+1)] = temp;
    // }
    // return arr.join()===newArr.join();

var isPalindrome = function(head) {


    // Main and pakka approach

    // part 1 - find the middle element first..

    let slow = fast = head;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    //now slow is the mid element here.. so take it as curr for part 2..
    let curr = slow;

    //part 2 - Reverse the balance linkedlist from slow( which is curr)..
    
    let prev = null;

    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // here prev is our curr reveresed LL - for part 3

    // part 3 - compare 1st half (using head) and 2nd half using prev , 
    // then get close , if not equals then return false , else after the loop
    // ends it must return true. That means balanced and ended , thus 
    //palindrome occurs so return true..

    let firstLL = head;
    let secondLL = prev;

    while(secondLL) {
        if(firstLL.val !== secondLL.val) return false;
        
        firstLL = firstLL.next;
        secondLL = secondLL.next;
    }
    return true;

};