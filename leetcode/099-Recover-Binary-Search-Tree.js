/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let cursor = null;

var recoverTree = function (root) {


    let [root, minVal = Number.MIN_SAFE_INTEGER, maxVal = Number.MAX_SAFE_INTEGER] = rest;

    if (root == null) {
        return;
    }

    if (root.val >= maxVal || root.val <= minVal) {
        if (cursor == null) {
             cursor = root;
             return true;
        } else {
            let tmp = root.val;
            root.val = cursor.val;
            cursor.val = tmp;
            cursor = null;
        }
    }

    recoverTree(root.left, minVal, root.val);
    recoverTree(root.right, root.val, maxVal);
};

// let root1 = {
//   val:2,
//   left:{
//     val:3
//   },
//   right:{
//     val:1
//   }
// }


let root2 = {
    val:0,
    left:{
        val:1
    },
    right:{
        val:2
    }
}


let root3 = {
    val : 2,
    left : {
        val:0
    },
    right: {
        val:1
    }
}


//recoverTree(root1);
//console.log(root1);
//recoverTree(root2);



recoverTree(root3);

console.log(root2);
console.log(root3);