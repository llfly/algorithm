/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
*/


/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

function RandomListNode(lable) {
    this.label = lable;
    this.next = this.random = null;
}

var copyRandomList = function(head) {
    let dumny = new RandomListNode(-1);
    dumny.next = head;

    let cur = head;

    while (head) {



    }


    return dumny.next;
};