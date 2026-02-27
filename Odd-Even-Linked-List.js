1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @return {ListNode}
11 */
12var oddEvenList = function(head) {
13
14    if(!head || !head.next) return head;
15    
16    let odd = head;
17    let even = head.next;
18    let evenStart =  even;
19
20    while(odd.next && even.next){
21        odd.next = odd.next.next;
22        odd = odd.next;
23        even.next = even.next.next;
24        even =  even.next;
25
26    }
27    odd.next = evenStart;
28    return head;
29    
30};