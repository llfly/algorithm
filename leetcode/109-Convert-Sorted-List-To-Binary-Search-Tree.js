/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedListToBST = function (head) {
    if (head == null) {
        return null;
    }

    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }

    const createTree = (start, end) => {
        if (start <= end) {
            let mid = start + Math.floor((end - start) / 2);

            let left = createTree(start, mid - 1);
            let root = new TreeNode(head.val);
            root.left = left;
            head = head.next;
            root.right = createTree(mid + 1, end);

            return root;
        } else {
            return null;
        }
    };

    return createTree(0, len - 1);
};



let arr = [1, 2, 3, 5, 6, 8, 9];
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const ListHelper = (arr) => {
    let obj = new ListNode(arr.shift());
    arr.reduce((pre, cur) => {
        pre.next = new ListNode(cur);
        return pre.next;
    }, obj);
    return obj;
};


console.log(sortedListToBST(ListHelper(arr)));