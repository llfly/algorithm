/*
Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

Note: Recursive solution is trivial, could you do it iteratively?

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

var postorderTraversal = function(root) {
    let result = [];
    if (root == null) {
        return result;
    }
    
    let left = postorderTraversal(root.left);
    let right = postorderTraversal(root.right);
    
    Array.prototype.push.apply(result,left);
    Array.prototype.push.apply(result,right);
    result.push(root.val);
    
    return result
};