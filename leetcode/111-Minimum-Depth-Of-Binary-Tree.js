/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
 * @return {number}
 */
var minDepth = function(root) {
    if(root == null){
        return 0;
    }

    let left = minDepth(root.left);
    let right = minDepth(root.right);
    
    return (left == 0 || right == 0) ? left + right + 1: Math.min(left,right) + 1;
};



let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};


let test1 = {
    val:1,
    left:{
        val:2,
        left:null,
        right:null
    },
    right:null
}

console.log(minDepth(root));

console.log(minDepth(test1));