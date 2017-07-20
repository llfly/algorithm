/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    2
   / \
  1   3
Binary tree [2,1,3], return true.
Example 2:
    1
   / \
  2   3
Binary tree [1,2,3], return false.
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
 * @return {boolean}
 */
var isValidBST = function(...rest) {
    let [root, minVal = Number.MIN_SAFE_INTEGER, maxVal = Number.MAX_SAFE_INTEGER] = rest;

    if (root == null) {
      return true;
    }

    if (root.val >= maxVal || root.val <= minVal) {
      return false;
    }

    return isValidBST(root.left, minVal, root.val) && isValidBST(root.right, root.val, maxVal);
};

let root1 = {
  val:2,
  left:{
    val:1
  },
  right:{
    val:3
  }
}


let root2 = {
  val:0
}


console.log(isValidBST(root1));
console.log(isValidBST(root2));