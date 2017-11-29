/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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

const depth = (root) => {
    if (root == null) {
        return 0;
    }
    return Math.max(depth(root.left), depth(root.right)) + 1;
}

var isBalanced = function (root) {
    if (root == null) {
        return true;
    }

    let left = depth(root.left);
    let right = depth(root.right);

    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};


