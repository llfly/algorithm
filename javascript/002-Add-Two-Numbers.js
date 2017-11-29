/*

 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
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





function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {

    var start  = new ListNode(0);
    var cursor = start;
    while (l1 && l2) {
        let val1 = l1.val;
        l1 = l1.next;

        let val2 = l2.val;
        l2 = l2.next;

        let tmp = val1 + val2 + cursor.val;
        cursor.val = tmp % 10;
        cursor.next = new ListNode(parseInt(tmp/10));
        if(l1 && l2){
            cursor = cursor.next;
        }else {
            if(cursor.next.val == 0){
                cursor.next = null;
            }
        }
    }

    return start;
};




console.log(addTwoNumbers({
    val: 2,
    next: {
    val: 4,
    next: {
    val: 3,
    next: null
}
}
}, {
    val: 5,
    next: {
    val: 6,
    next: {
    val: 4,
    next: null
}
}
}));

//(2 -> 4 -> 3) + (5 -> 6 -> 4)