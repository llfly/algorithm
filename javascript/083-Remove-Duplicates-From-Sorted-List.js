/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
 * @return {ListNode}
 */

let { ListNode, ListHelper, List2Array } = require('../helper');

var deleteDuplicates = function (head) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    while (head && head.next) {
        let value = head.val;
        if (head.val == head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return dummy.next;
};


let list = ListHelper([1, 1, 1, 2, 3, 3]);

console.log(List2Array(deleteDuplicates(list)))

