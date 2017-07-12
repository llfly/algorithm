/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let len = nums.length;

    if (len === 0) {
        return null;
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

    if (nums[start] > nums[end]) {
        return nums[end];
    } else {
        return nums[start];
    }
};


console.log(findMin([4, 5, 6, 7, 0, 1, 2, 3]));
console.log(findMin([5, 1, 2, 3, 4]));
//console.log(findMin([3,3,1,3]))

//[4 5 6 7 0 1 2 3]