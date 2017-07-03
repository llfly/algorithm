/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length;
    let start = 0;
    let end = len - 1;

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

    if(nums[start] === target){
        return start;
    }

    if(nums[end] === target){
        return end;
    }

    if(nums[start] > target){
         let pos = start - 1;
         return pos > 0 ? pos : 0;
    }

    if(nums[start] < target && target < nums[end]){
        return end;
    }

    if(nums[end] < target){
        return end + 1;
    }

    return 0;
};


console.log(searchInsert([1, 3, 5, 6], 5));// 2
console.log(searchInsert([1, 3, 5, 6], 2));// 1
console.log(searchInsert([1, 3, 5, 6], 7));// 4
console.log(searchInsert([1, 3, 5, 6], 0));// 0
console.log(searchInsert([1, 3, 5, 6], 9));// 4
console.log(searchInsert([1], 5));// 1
console.log(searchInsert([], 5));// 0
