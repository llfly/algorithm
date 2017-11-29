/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let { ListNode, ListHelper } = require('../helper');

var mergeTwoLists = function (l1, l2) {
    let newList = new ListNode(-1), head = newList;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }

        head = head.next;
    }

    head.next = (l1 != null) ? l1 : l2;

    return newList.next;
};



var mergeTwoLists2 = function (l1, l2) {

    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val > l2.val) {
        let tmp = l2;
        tmp.next = mergeTwoLists(l1, l2.next);
        return tmp;
    } else {
        let tmp = l1;
        tmp.next = mergeTwoLists(l1.next, l2);
        return tmp;
    }
}


// let l1 = ListHelper([1, 3, 5, 8, 9]);
// let l2 = ListHelper([2, 6, 9, 10]);

let l1 = ListHelper([1]);
let l2 = ListHelper([2]);



console.log(mergeTwoLists(l1, l2));



let l3 = ListHelper([1]);
let l4 = ListHelper([2]);

console.log(mergeTwoLists2(l3, l4));
