/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1;
};

console.log(minDepth(TreeHelper([null, 2, null, 1, null])));