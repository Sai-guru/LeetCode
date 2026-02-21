/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
//   ListNode curr = head;
//         ArrayList<Integer> arr = new ArrayList<>();

//         while(curr!=null) {
//             arr.add(curr.val);
//             curr = curr.next;
//         }

//         ArrayList<Integer> newArr = new ArrayList<>(arr);
//         int n = newArr.size();

//         for(int i=0;i<(n/2);i++) {
//             int temp = newArr.get(i);
//             newArr.set(i,newArr.get(n-(i+1)));
//             newArr.set(n-(i+1),temp);
//         }

//         return arr.equals(newArr);   

class Solution {
    public boolean isPalindrome(ListNode head) {

    // Main and pakka approach

    // part 1 - find the middle element first..

    ListNode slow = head;
    ListNode fast = head;

    while(fast!=null && fast.next!=null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //now slow is the mid element here.. so take it as curr for part 2..

    ListNode curr = slow;

    //part 2 - Reverse the balance linkedlist from slow( which is curr)..

    ListNode prev = null;

    while(curr!=null) {

        ListNode temp = curr.next;

        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // here, prev is our curr reveresed LL - for part 3

    // part 3 - compare 1st half (using head) and 2nd half using prev , 
    // then get close , if not equals then return false ,otherwise after the loop
    // ends it must return true. That means balanced and ended , thus 
    //palindrome occurs so return true..

    ListNode firstLL = head;
    ListNode secondLL = prev;

    while(secondLL!=null) {

        if(firstLL.val!=secondLL.val) return false;

        firstLL = firstLL.next;
        secondLL = secondLL.next;
    }
    return true;

    }
}