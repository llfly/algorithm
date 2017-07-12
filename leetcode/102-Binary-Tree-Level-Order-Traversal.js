/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

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
 * @return {number[][]}
 */

var levelOrder = function (root) {
    let result = [];

    if (root == null) {
        return result;
    }

    let queue = [];
    queue.push(root);

    while (queue.length) {
        let len = queue.length;
        let level = [];

        for (let i = 0; i < len; i++) {
            let head = queue.shift();
            level.push(head.val);

            if (head.left) {
                queue.push(head.left);
            }

            if (head.right) {
                queue.push(head.right);
            }
        }

        result.push(level);
    }

    return result;
}