/*

Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let len = nums.length;

    if (len === 0) {
        return false;
    }

    let start = 0;
    let end = len - 1;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] > nums[end]) {
            if (nums[mid] > target && nums[start] <= target) {
                end = mid;
            } else {
                start = mid;
            }
        } else if (nums[mid] < nums[end]) {
            if (nums[mid] < target && nums[end] >= target) {
                start = mid;
            } else {
                end = mid;
            }
        } else {
            end--;
        }
    }

    if (nums[start] === target || nums[end] === target) {
        return true;
    }
    return false;
};

console.log(search([4, 5, 5, 6, 7, 0, 1, 1, 1], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 2));
console.log(search([], 2));
console.log(search([1, 2, 3, 4, 5, 6, 7], 2));
console.log(search([3, 5, 1], 1));
console.log(search([3, 5, 1], 3));
console.log(search([3, 5, 1], 5));
console.log(search([3, 5, 1, 1, 1, 1], 5));
console.log(search([3, 5, 5, 5, 5, 1], 5));
console.log(search([3, 3, 3, 3, 5, 1], 5));