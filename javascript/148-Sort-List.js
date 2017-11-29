/*
Sort a linked list in O(n log n) time using constant space complexity.
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

let { ListNode, ListHelper } = require('../helper');

const findMiddle = (head) => {
    let slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};


const merge = (head1, head2) => {
    let dummy = new ListNode(-1);
    let tail = dummy;
    while (head1 != null && head2 != null) {
        if (head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
        } else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }

    if (head1 != null) {
        tail.next = head1;
    }

    if (head2 != null) {
        tail.next = head2;
    }

    return dummy.next;
};

var sortList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let mid = findMiddle(head);

    let right = sortList(mid.next);
    mid.next = null;
    let left = sortList(head);

    return merge(left, right);
};



let list = ListHelper([2,4,1,3,5]);

console.log(sortList(list));