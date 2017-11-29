/*
Given a singly linked list L: L0?L1?…?Ln-1?Ln,
reorder it to: L0?Ln?L1?Ln-1?L2?Ln-2?…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.

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
 * @return {void} Do not return anything, modify head in-place instead.
 */

let { ListNode, ListHelper } = require('../helper');

const findMiddle = (head) => {
    let slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};


const reverse = (head) => {
    let newHead = null;

    while (head != null) {
        let temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }

    return newHead;
}

const merge = (head1, head2) => {
    let dummy = new ListNode(-1);
    let temp = dummy;
    let index = 0;
    while (head1 != null && head2 != null) {
        if (index % 2 == 0) {
            temp.next = head1;
            head1 = head1.next;
        } else {
            temp.next = head2;
            head2 = head2.next;
        }

        temp = temp.next;
        index++;
    }

    if (head1 != null) {
        temp.next = head1;
    }

    if (head2 != null) {
        temp.next = head2;
    }

    return dummy.next;
}


var reorderList = function (head) {
    if (head == null || head.next == null) {
        return;
    }

    let mid = findMiddle(head);
    let tail = reverse(mid.next);
    mid.next = null;
    merge(head, tail);
};

let list = ListHelper([1,2,3,4]);


console.log(reorderList(list));