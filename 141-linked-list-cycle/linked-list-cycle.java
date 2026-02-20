/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {

        // ListNode curr = head;
        // Set<ListNode> mySet = new HashSet<>();

        // while(curr!=null) {
        //     if(mySet.contains(curr)) return true;

        //     mySet.add(curr);
        //     curr = curr.next;
        // }
        // return false;

        //Approach 2 - Floyd's cycle
        
        if(head==null) return false;

        ListNode slow = head;
        ListNode fast = head.next;

        while(slow!=fast) {
            if(fast==null || fast.next==null) return false;
            
            fast = fast.next.next;
            slow = slow.next;

        }

        return true;

       



        
    }
}