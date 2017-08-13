/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

let { ListNode, ListHelper, List2Array} = require('../helper');


var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let fast = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) return head.next;

    while (fast.next != null) {
        head = head.next;
        fast = fast.next;
    }

    head.next = head.next.next;

    return dummy.next;
};


let list = ListHelper([1, 2, 3, 4, 5]);


console.log(List2Array(removeNthFromEnd(list, 1)));
// console.log(List2Array(removeNthFromEnd(list, 2)));
// console.log(List2Array(removeNthFromEnd(list, 3)));
// console.log(List2Array(removeNthFromEnd(list, 4)));
// console.log(List2Array(removeNthFromEnd(list, 5)));