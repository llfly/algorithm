/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
var zigzagLevelOrder = function(root) {
    let result = [];

    if (root == null) {
        return result;
    }

    let queue = [];
    queue.push(root);


    while (queue.length) {
        let buffer = [];
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let head = queue.shift();
            buffer.push(head.val);

            if(head.left){
                queue.push(head.left);
            }

            if(head.right) {
                queue.push(head.right);
            }
        }

        if(result.length % 2){
            result.push(buffer.reverse());
        }else{
            result.push(buffer);
        }

        
    }

    return result;
};


let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }
}

console.log(zigzagLevelOrder(root));