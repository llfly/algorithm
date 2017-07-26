/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let { TreeNode } = require('../helper');

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const tree = (inStart, inEnd, postStart, postEnd) => {

        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }

        let rootVal = postorder[postEnd];
        let index = 0;

        for (let i = inStart; i <= inEnd; i++) {
            if (inorder[i] == rootVal) {
                index = i;
                break;
            }
        }

        let offset = index - inStart;
        let root = new TreeNode(rootVal);
        root.left = tree(inStart, index - 1, postStart, postStart + offset - 1);
        root.right = tree(index + 1, inEnd, postStart + offset, postEnd - 1);

        return root;
    }

    return tree(0, inorder.length - 1, 0, postorder.length - 1)
};



let inorder = [8, 4, 2, 5, 1, 6, 3, 7];
let postorder = [8, 4, 5, 2, 6, 7, 3, 1];
console.log(buildTree(inorder, postorder));