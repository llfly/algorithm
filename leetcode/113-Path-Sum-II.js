/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]

*/
let { TreeHelper } = require('../helper');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let results = [];
    if (root == null) {
        return results;
    }
    
    const sumHepler = (root, tmp) => {

        if (root.left == null && root.right == null) {
            tmp.push(root.val);
            if (tmp.reduce((pre, cur) => pre + cur) == sum) {
                results.push(tmp.slice());
            }
            return;
        }
        
        tmp.push(root.val);

        if (root.left) {
            sumHepler(root.left, tmp);
            tmp.pop();
        }

        if (root.right) {
            sumHepler(root.right, tmp);
            tmp.pop();
        }
    }

    sumHepler(root, []);
    return results;
};



let tree = TreeHelper([7, 11, 2, 4, null, null, null, 5, null, 13, null, 8, 5, 4, 1]);
console.log(pathSum(tree, 22));