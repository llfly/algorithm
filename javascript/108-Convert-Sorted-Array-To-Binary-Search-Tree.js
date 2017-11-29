/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

let { TreeNode } = require('../helper');

var sortedArrayToBST = function (nums) {
    const createTree = (start, end) => {
        if (start < end) {
            let mid = start + Math.floor((end - start) / 2);
            let root = new TreeNode(nums[mid]);
            root.left = createTree(start, mid - 1);
            root.right = createTree(mid + 1, end);

            return root;
        } else if (start == end) {
            return new TreeNode(nums[start]);
        } else {
            return null;
        }
    }

    return createTree(0, nums.length - 1);
};


let arr = [1, 2, 3, 4, 5, 7, 8, 9];
let arr1 = [1, 2];

console.log(sortedArrayToBST(arr));
console.log(sortedArrayToBST(arr1));