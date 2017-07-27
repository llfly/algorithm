/*
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
Hints:
If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

let { TreeHelper } = require('../helper');


var flatten = function (root) {
    //let head = root;
    while (root) {
        if (root.left) {
            let cur = root.left;
            while (cur.right) {
                cur = cur.right;
            }
            cur.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }

    //console.log(head);
};


let tree = TreeHelper([3, 2, 4, 1, null, 5, 6]);
flatten(tree);