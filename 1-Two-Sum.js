/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr[0] = i;
        var other = target - nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] == other && i != j) {
                arr[1] = j;
                return arr;
            }
        }
    }
    return arr;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-1, -2, -3, -4, -5], -8));