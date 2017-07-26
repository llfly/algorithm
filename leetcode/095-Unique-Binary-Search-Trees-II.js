/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let { TreeNode } = require('../helper');

var generateTrees = function (n) {
    if (!n) {
        return [];
    }

    const generateTree = (begin, end) => {
        let left = [], right = [], res = [];

        if (begin > end) {
            res.push(null);
            return res;
        }

        for (let i = begin; i <= end; i++) {
            left = generateTree(begin, i - 1);
            right = generateTree(i + 1, end);
            left.forEach(l => {
                right.forEach(r => {
                    let root = new TreeNode(i);
                    root.left = l;
                    root.right = r;
                    res.push(root);
                })
            })
        }
        return res;
    }

    return generateTree(1, n);
};

console.log(generateTrees(0));
console.log(generateTrees(3));