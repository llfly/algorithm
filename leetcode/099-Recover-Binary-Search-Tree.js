/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let cursor = null;

var recoverTree = function (...rest) {


    let [root, minVal = Number.MIN_SAFE_INTEGER, maxVal = Number.MAX_SAFE_INTEGER] = rest;

    if (root == null) {
        return;
    }

    if (root.val >= maxVal || root.val <= minVal) {
        if (cursor == null) {
            cursor = root;
            return true;
        } else {
            let tmp = root.val;
            root.val = cursor.val;
            cursor.val = tmp;
            cursor = null;
        }
    }

    recoverTree(root.left, minVal, root.val);
    recoverTree(root.right, root.val, maxVal);
};


console.log(recoverTree(TreeHelper([2, 0, 1])));
console.log(recoverTree(TreeHelper(0, 1, 2)));