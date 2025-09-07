/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
;
function middleNode(head) {
    const nodes = [];
    let curr = head;

    // store all nodes in an array
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }

    // return the middle node (second middle if even length)
    return nodes[Math.floor(nodes.length / 2)];
}
