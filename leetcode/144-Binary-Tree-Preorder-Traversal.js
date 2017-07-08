/*

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

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

// 1. Traversal
const preorderTraversal = function (root) {
    let result = [];
    const traversal = (root, result) => {
        if (root == null) {
            return;
        }
        result.push(root.val);
        traversal(root.left, result);
        traversal(root.right, result);
    }
    traversal(root, result);
    return result;
}

// 2. Divide & Conquer
const preorderDivide = function (root) {
    let result = [];

    //null or leaf
    if (root == null) {
        return result;
    }

    //Divide
    let left = preorderDivide(root.left);
    let right = preorderDivide(root.right);

    //Conquer
    result.push(root.val);
    Array.prototype.push.apply(result, left);
    Array.prototype.push.apply(result, right);
    return result;
}

// 3. 非递归
const preorder = function (root) {
    let stack = [];
    let result = [];

    if (root == null) {
        return result;
    }

    stack.push(root);

    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right != null) {
            stack.push(node.right);
        }
        if (node.left != null) {
            stack.push(node.left);
        }
    }
    return result;
}



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


console.log(preorderTraversal(root));
console.log(preorderDivide(root))
console.log(preorder(root));