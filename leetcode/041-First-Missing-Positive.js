/*
 https://leetcode.com/problems/first-missing-positive/#/description

 Given an unsorted integer array, find the first missing positive integer.

 For example,
 Given [1,2,0] return 3,
 and [3,4,-1,1] return 2.

 Your algorithm should run in O(n) time and uses constant space.


 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let len = nums.length, c;

    for (let i = 0; i < len; i++) {
        while (nums[i] != i + 1 && nums[i] > 0 && nums[i] <= len && nums[i] != nums[nums[i] - 1]) {
            c = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = c;
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] != i + 1)
            return i + 1;
    }

    return len + 1;
};


console.log(firstMissingPositive([3, 4, -1, 1]));



//3 4 -1 1
//-1 4 3 1
//-1 1 3 4
//1 -1 3 4