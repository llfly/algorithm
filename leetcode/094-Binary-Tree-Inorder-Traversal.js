/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

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
var inorderTraversal = function (root) {
    let result = [];
    if (root == null) {
        return result;
    }

    let left = inorderTraversal(root.left);
    let right = inorderTraversal(root.right);


    Array.prototype.push.apply(result, left);
    result.push(root.val);
    Array.prototype.push.apply(result, right);

    return result;
};


let root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
};

console.log(inorderTraversal(root))