/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */




var search = function (nums, target) {
    let len = nums.length;

    if (len === 0) {
        return -1;
    }

    let start = 0;
    let end = len - 1;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > nums[end]) {
            start = mid;
        } else {
            end = mid;
        }
    }

    let rot = end;
    start = 0; end = len - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let realMid = (mid + rot) % len;
        if (nums[realMid] === target) {
            return realMid;
        } else if (nums[realMid] > target) {
            end = mid - 1;
        } else if (nums[realMid] < target) {
            start = mid + 1;
        }
    }

    if (nums[start] === target) {
        return start;
    }

    if (nums[end] === target) {
        return end;
    }

    return -1;
};



console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 2));
console.log(search([], 2));
console.log(search([1, 2, 3, 4, 5, 6, 7], 2));
console.log(search([3, 5, 1], 1));
console.log(search([3, 5, 1], 3));
console.log(search([3, 5, 1], 5));