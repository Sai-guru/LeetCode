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
class Solution {
    public ListNode rotateRight(ListNode head, int k) {

        if(head==null|| head.next == null) return head;


        //first know the length of the LL
        int len = 0;
        ListNode curr = head;

        while(curr!=null) {
            len++;
            curr = curr.next;
        }

        //avoid unwanted rotates
        k = k%len;

        //our reaching logic , 
        //1st reach the place of last node using fast pointer with k 
 
        ListNode fast = head;
        ListNode slow = head;

        for(int i=0;i<k;i++) {
            fast = fast.next;
        }

        //now the above last node is reached by that fast pointer
        //so , run the  fast and slow pointers , where 
        //the slow pointers will take the last node position from the fast pointer
 
        while(fast.next!=null) {
            fast = fast.next;
            slow = slow.next;
        }
         
        //now form the cycle by fast last ptr to given head;
        //slow next pointer to newHead (bcos then only can keep the starting node)
        //then make the slow pointer next to null - bcos end of the list

        fast.next =  head;
        ListNode newHead = slow.next;
        slow.next = null;

        //simply return the newHead;
        return newHead;
        
    }
}