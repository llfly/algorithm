/*
Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]

*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const getNum = (arr) => arr.reduce((pre, cur) => pre + cur, 0);

const helper = (result, path, nums, target, pos) => {
    if (getNum(path) == target) {
        result.push(path.slice());
    }

    for (let i = pos; i < nums.length; i++) {
        if (getNum(path) + nums[i] > target) {
            continue;
        }
        path.push(nums[i]);
        helper(result, path, nums, target, i + 1);
        path.pop();
    }
}


var combinationSum = function (candidates, target) {
    let result = [], path = [];
    helper(result, path, candidates, target, 0);
    return result;
};


console.log(combinationSum([2, 3, 6, 7], 7));