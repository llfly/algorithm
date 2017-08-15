/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

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

var swapPairs = function (head) {
    if (head == null || head.next == null) return head;

    let temp = head.next;
    head.next = swapPairs(temp.next);
    temp.next = head;

    return temp;

};


var swapPairs = function (head) {
    if (head == null) return null;
    let dummy = new ListNode(-1);
    dummy.next = head;

    pre = dummy;
    cur = head;

    while (cur != null && cur.next != null) {
        let next = cur.next.next;
        cur.next.next = cur;
        pre.next = cur.next;
        if (next != null && next.next != null)
            cur.next = next.next;
        else 
            cur.next = next;
        pre = cur;
        cur = next;
    }
    return dummy.next;
}


let list = ListHelper([1, 2, 3, 4]);
console.log(List2Array(swapPairs(list)));


/*
head = 1;
temp = head.next = 2;
head.next = (temp.next 3);
temp.next = head;

*/