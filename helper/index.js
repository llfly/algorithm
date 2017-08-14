function ListNode(val) {
    this.val = val;
    this.next = null;
}


// Array --> LinkList
const ListHelper = (arr) => {
    let obj = new ListNode(arr.shift());
    arr.reduce((pre, cur) => {
        pre.next = new ListNode(cur);
        return pre.next;
    }, obj);
    return obj;
};


// LinkList --> Array 

const List2Array = (list) => {
    let arr = [];
    
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    
    return arr;
}


// Array --> tree (inorder)
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const TreeHelper = (arr) => {

    createTree = (start, end) => {
        if(start <= end) {
            let mid = start + Math.floor((end - start) / 2);

            let root = new TreeNode(arr[mid]);
            root.left = createTree(start, mid - 1);
            root.right  = createTree(mid + 1, end);

            return root;
        } else {
            return null;
        }
    }

    return createTree(0, arr.length - 1);
}

module.exports = {
    ListNode,
    ListHelper,
    List2Array,

    
    TreeNode,
    TreeHelper,
};