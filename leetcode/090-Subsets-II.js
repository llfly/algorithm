/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsetHelper = (result, path, nums, pos) => {
    result.push(path.slice());

    for (let i = pos; i < nums.length; i++) {
        if (i != pos && nums[i] === nums[i - 1]) {
            continue;
        }
        path.push(nums[i]);
        subsetHelper(result, path, nums, i + 1);
        path.splice(path.length - 1);
    }
}

var subsetsWithDup = function (nums) {
    let result = [], path = [];
    nums.sort((a, b) => a - b);
    subsetHelper(result, path, nums, 0);
    return result;
};


console.log(subsetsWithDup([1, 2, 2]));