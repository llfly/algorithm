/*

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.


1. 先序遍历的第一个为整棵树的根节点
2. 中序遍历中根节点是左子树右子树的分割点
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const tree = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }

        let rootVal = preorder[preStart];
        let rootIndex = 0;

        for (let i = inStart; i <= inEnd; i++) {
            if (inorder[i] == rootVal) {
                rootIndex = i;
                break;
            }
        }

        let len = rootIndex - inStart;
        let root = new TreeNode(rootVal);

        root.left = tree(preStart + 1, preStart + len, inStart, rootIndex - 1);
        root.right = tree(preStart + len + 1, preEnd, rootIndex + 1, inEnd);

        return root;
    }

    return tree(0, preorder.length - 1, 0, inorder.length - 1);
};



let preorder = [1, 2, 4, 5, 3, 6, 8, 7];
let inorder = [4, 2, 5, 1, 6, 8, 3, 7];

console.log(buildTree(preorder, inorder));