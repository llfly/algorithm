/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    if (p === null && q === null) {
        return true;
    }

    if (p == null || q == null) {
        return false;
    }
    if (p.val == q.val)
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    return false;
};

console.log(isSameTree(TreeHelper([10, 5, 15]), TreeHelper(10, 5, null, null, 15)));

