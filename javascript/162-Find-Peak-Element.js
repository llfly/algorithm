/*
A peak element is an element that is greater than its neighbors.

Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

Note:
Your solution should be in logarithmic complexity.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let len = nums.length;

    if (len === 0) {
        return 0;
    }

    let start = 0;
    let end = len - 1;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid - 1] > nums[mid] && nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if (nums[start] > nums[end]) {
        return start;
    } else {
        return end;
    }
};


console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 3, 4, 5, 1, 2, 3, 4]));