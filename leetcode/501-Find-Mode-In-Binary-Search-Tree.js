/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 中序遍历 找最大重复值
var findMode = function (root) {
    let maxCount = 0, currentVal, tempCount = 0, result = [];

    const inorder = (root) => {
        if (root == null) {
            return;
        }
        inorder(root.left);
        tempCount++;

        if (currentVal != root.val) {
            currentVal = root.val;
            tempCount = 1;
        }

        if (tempCount > maxCount) {
            maxCount = tempCount;
            result = [];
            result.push(root.val);
        } else if (tempCount == maxCount) {
            result.push(root.val);
        }
        inorder(root.right);
    }

    inorder(root);

    return result;
};


let root1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 2,
            left: null,
            right: null
        }
    }
}

let root2 = {};


console.log(findMode(root1));
console.log(findMode(root2));