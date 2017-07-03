/*

Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].


 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length, reStart = -1, reEnd = -1;

    let start = 0;
    let end = len - 1;

    // get Start
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            end = mid;
        } else if (nums[mid] > target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        }
    }

    if (nums[end] === target) {
        reStart = end;
    }

    if (nums[start] === target) {
        reStart = start;
    }

    // get End
    end = len - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            start = mid;
        } else if (nums[mid] > target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        }
    }

    if (nums[start] === target) {
        reEnd = start;
    }
    if (nums[end] === target) {
        reEnd = end;
    }

    return [reStart, reEnd];
};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([], 8));
console.log(searchRange([8, 8, 8, 8, 8, 8], 8));
console.log(searchRange([8, 8, 8, 8, 8], 8));
