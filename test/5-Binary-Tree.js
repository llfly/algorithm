// Binary Tree
// 基本操作
// 分治法
// 遍历 深度／广度遍历


// 1. Binary Tree DFS Traversal
// - preorder / inorder / postorder
// - Divide & Conquer
// - DFS
// 2. Binary Tree BFS Traversal
// 3. Binary Search Tree


function Node(val,left,right) {
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
    if(root == null){
        return result;
    }

    //Divide
    let left = preorderDivide(root.left);
    let right = preorderDivide(root.right);

    //Conquer
    result.push(root.val);
    Array.prototype.push.apply(result,left);
    Array.prototype.push.apply(result,right);
    return result;
}

// 3. 非递归
const preorder = function (root) {
    let stack = [];
    let result = [];

    if(root == null){
        return result;
    }

    stack.push(root);

    while(stack.length){
        let node = stack.pop();
        result.push(node.val);
        if(node.right != null){
            stack.push(node.right);
        }
        if(node.left != null){
            stack.push(node.left);
        }
    }
    return result;
}


let root = {
    val:1,
    left:{
        val:2,
        left:null,
        right:{
            val:3,
            left:null,
            right:null
        }
    }
};

console.log(preorderTraversal(root));



console.log(preorderDivide(root))


console.log(preorder(root));



// Divide & Conquer Algorithm

// - Merge Sort 最坏情况nlogn 最好nlogn 合并操作需要使用额外空间 O(n)  稳定排序
// - Quick Sort 最坏情况n^2 平均nlogn     不需要额外空间O(1)  不稳定排序
// 稳定性 稳定排序 1 2(1) 2(2)  
// ==>  1 2(1) 2(2) 稳定排序
// ==>  1 2(2) 2(2) 不稳定排序




// 