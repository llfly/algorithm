// Binary Tree
// 基本操作
// 分治法
// 遍历 深度(递归)／广度(队列)遍历


// 1. Binary Tree DFS Traversal
// - preorder / inorder / postorder
// - Divide & Conquer
// - DFS
// 2. Binary Tree BFS Traversal
// 3. Binary Search Tree


function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Binart Tree Preorder Traversal
// preorder 递归／非递归

// preorder

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

console.log(preorderTraversal(root));
console.log(preorderDivide(root))
console.log(preorder(root));



// Divide & Conquer Algorithm

// - Merge Sort nlogn(每一层都是O(n),一共logn层) 合并操作需要使用额外空间 O(n)  稳定排序
// - Quick Sort 最坏情况n^2 平均nlogn(每次选出的值都是最小或最大，每次都是O(n)，因此最坏是O(n^2)，均摊复杂度)     不需要额外空间O(1)  不稳定排序
// 稳定性 稳定排序 1 2(1) 2(2)  
// ==>  1 2(1) 2(2) 稳定排序
// ==>  1 2(2) 2(2) 不稳定排序




// Maximum Depth of Binary Tree
const maxDepth = (root) => {
    if (root == null) {
        return 0;
    }

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}

// const findMaxDepth = (root, curDepth) => {
//     if (root == null) {
//         return 0;
//     }

//     if(curDepth > maxDepth) {
//         maxDepth = curDepth;
//     }

//     findMaxDepth(root.left, curDepth + 1);
//     findMaxDepth(root.right,curDepth + 1);

// }


// Balanced Binary Tree
// root.left is balanced && root.right is balanced && depth(root.left) - depth(root.right) <= 1


// Binary Tree Maximum Path Sum
// 1. left max path
// 2. right max path
// 3. left + root + right

const MaximumPathSum = (root) => {
    if (root == null) {
        return {
            singlePath: 0,// 可以一个点都没有
            maxPath: Number.MIN_VALUE //至少有一个点
        }
    }

    let left = MaximumPathSum(root.left);
    let right = MaximumPathSum(root.right);

    let singlePath = Math.max(left.singlePath, right.singlePath) + root.val;// 取 root
    singlePath = Math.max(singlePath, 0); // 没取 root

    let maxPath = Math.max(left.maxPath, ringht.maxPath);
    maxPath = Math.max(maxPath, left.singlePath + right.singlePath + root.val);

    return {
        singlePath,
        maxPath
    }
}

// 二叉树最长路径 root => 最远处 O(n) 从最远处出发 => 再走最远 （数据结构发生变化）


// Binary Tree DFS


// lowest Common Ancestor 两个点 一次查询最近公共祖先
// 有 parent节点  从 A -> root B -> root 分叉处即为最近公共祖先



//Binary Tree Level Order Traversal
// - 2 Queues
// - 1 Queue + Dummy Node
// - 1 Queue(best)
/*
            1
        2       3
     4     5 6     7
  8     9
 */

// 2 Queues
/*
q1:1
q2:23（存储q1所有子节点）

q1:23
q2:4567

q1:4567
q2:89
 */


// 1 Queue + Dummy Node(#)
/*
q:1
q:1#
q:1#23
q:#23
q:23#
q:23#4567
q:#4567
q:4567#
q:4567#89
q:#89
q:89#
 */


// 1 Queue
// 每个点被push一次，出来一次，所以为O(1),n个点，所以时间复杂度为O(n)，空间复杂度O(n)
// 分析方法：push/pop 数据结构几次
const levelOrder = (root) => {
    let result = [];

    if (root == null) {
        return result;
    }
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let head = queue.shift();
            level.push(head.val);
            if (head.left != null) {
                queue.push(head.left);
            }
            if (head.right != null) {
                queue.push(head.right);
            }
        }
        result.push(level);
    }
    return result;
}


console.log(levelOrder(root));

// Binary Search Tree
// Validate Binary Serach Tree
// 左子树值比根结点小，右节点比根结点大，且左右子树也需要满足（中序遍历是升序）


// 中序遍历
const BST = (target) => {
    let firstNode = true, lastVal = Number.MIN_VALUE;

    const isValidBST = (root) => {
        if (root == null) {
            return true;
        }

        if (!isValidBST(root.left)) {
            return false;
        }

        if (!firstNode && lastVal >= root.val) {
            return false;
        }

        firstNode = false;
        lastVal = root.val;
        if (!isValidBST(root.right)) {
            return false;
        }
        return true;
    }

    return isValidBST(target);
}


console.log(BST(root));


// 分治
// 左子树最大点小于根节点


// let left = validateBST(root.left);
// left right = validateBST(root.right);
// if(left.isBST && right.isBST && left.max < root.value && root.value < right.min){return ...}


// Insert a Range in a Binary
// Search Range in Binary Search Tree
// Implement iterator of Binary Serach Tree

// Remove Node in Binary Search Tree


