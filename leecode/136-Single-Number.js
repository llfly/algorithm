/*
 Given an array of integers, every element appears twice except for one. Find that single one.

 Note:
 Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */



var singleNumber = function(nums) {
    var savedNums = [];
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let index = savedNums.indexOf(current);
        if (~index) {
            savedNums.splice(index, 1);
        } else {
            // not found
            savedNums.push(current);
        }
    }
    return savedNums[0];
};


//两个相同的数异或结果为0

var singleNumber = function(nums) {
    return nums.reduce(function(acc, cur) {
        return acc ^ cur;
    });
};