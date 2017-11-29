/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
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
        path.push(nums[i]);
        subsetHelper(result, path, nums, i + 1);
        path.pop();
    }
}

var subsets = function (nums) {
    let result = [], path = [];
    subsetHelper(result, path, nums, 0);
    return result;
};


console.log(subsets([1, 2, 3]));