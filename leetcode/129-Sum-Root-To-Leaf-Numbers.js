/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let { TreeHelper } = require('../helper');

/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumNumbers = function (root) {
    const sum = (root, num) => {
        if (root == null) {
            return 0;
        }

        if (root.left == null && root.right == null) { // leaf
            return num * 10 + root.val;
        }

        return sum(root.left, num * 10 + root.val) + sum(root.right, num * 10 + root.val);
    }

    return sum(root, 0);
};


let tree = TreeHelper([1,2,3,4,5,6,7,8,9]);

console.log(sumNumbers(tree));