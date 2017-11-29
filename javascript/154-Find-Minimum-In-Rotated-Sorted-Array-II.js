/*

Follow up for "Find Minimum in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let len = nums.length;

    if (len === 0) {
        return 0;
    }

    let start = 0;
    let end = len - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > nums[end]) {
            start = mid;
        } else if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            end--;
        }
    }

    if (nums[start] > nums[end]) {
        return nums[end];
    } else {
        return nums[start];
    }
};



console.log(findMin([4, 5, 6, 7, 0, 1, 2, 3]));
console.log(findMin([4, 5, 5, 6, 7, 0, 1, 2, 3]));
console.log(findMin([5, 5, 5, 5, 1, 2, 3, 4]));
console.log(findMin([3, 3, 1, 3]));