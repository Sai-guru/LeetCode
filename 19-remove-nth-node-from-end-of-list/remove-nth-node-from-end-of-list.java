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

// ------My weird idea-----
//   int size = 0;
//         ListNode curr = head;

//         while(curr!=null) {
//             size++;
//             curr = curr.next;
//         }
//         if(n == size) return head.next;
//         curr = head;

//         for(int i=0;i<size-(n+1);i++) {
//             curr = curr.next;
//         }
//         curr.next = curr.next.next;
//         return head;

// ---almost same as above , just used senti and place standing ..
// ListNode senti = new ListNode();
//     senti.next = head;
//     ListNode prev = senti;
//     ListNode curr = head;
//     int size = 0;

//     while (curr != null) {
//         size++;
//         curr = curr.next;
//     }
//     if (n == size) return head.next;
//     int prevOfTarget = size - n;

//     for (int i = 0; i < prevOfTarget; i++) {
//         prev = prev.next;
//     }

//     prev.next = prev.next.next;
//     return head;


class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        ListNode senti = new ListNode();
        senti.next = head;
        ListNode first = senti;
        ListNode second = senti;

       // Now reach the prevTarget by first ptr
       // both loops works use any of them //

        // for(int i=0;i<n;i++) {
        //     first = first.next;
        // }

        while(n!=0) {
            first = first.next;
            n--;
        }


        //now after reaching , go till end  then that same
        //one step 2nd ptr will also travel;

        while(first!=null && first.next!=null) {
            first = first.next;
            second = second.next;
        }
        
        //golden line
        second.next = second.next.next;
        return senti.next; 

        
    }
}