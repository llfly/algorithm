


// Word Ladder II DFS 所有  +  BFS 最短距离
// Required Skills
// - Insert a Node in Sorted List
// - Remove a Node from Linked List
// - Reverse a Linked List
// - Merge Two Sorted Linked Lists
// - Find the Middle of a Linked List


let { ListNode, ListHelper } = require('../helper');

const removeNode = (head, val) => {

    // dummy
    let dummy = new ListNode(-1);
    dummy.next = head;

    let predHead = dummy;

    while (head != null) {
        if (head.val == val) {
            predHead.next = predHead.next.next;
            break;
        }
        head = head.next;
        predHead = predHead.next;
    }

    return dummy.next;
}


const reverseList = (head) => {
    let newHead = null;

    while (head!= null) {
        let temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }

    return newHead;
}


let list = ListHelper([1, 2, 3, 4, 5]);

console.log(removeNode(list, 1));
console.log(reverseList(list));


// Sort List