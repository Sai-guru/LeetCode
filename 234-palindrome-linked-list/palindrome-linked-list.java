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
    public boolean isPalindrome(ListNode head) {

        ListNode curr = head;
        ArrayList<Integer> arr = new ArrayList<>();

        while(curr!=null) {
            arr.add(curr.val);
            curr = curr.next;
        }

        ArrayList<Integer> newArr = new ArrayList<>(arr);
        int n = newArr.size();

        for(int i=0;i<(n/2);i++) {
            int temp = newArr.get(i);
            newArr.set(i,newArr.get(n-(i+1)));
            newArr.set(n-(i+1),temp);
        }

        return arr.equals(newArr);        
    }
}