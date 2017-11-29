/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permuteUniqueHelper = (result, path, nums, visited) => {
    if (path.length === nums.length) {
        result.push(path.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (
            visited[i] ||
            i != 0 && nums[i] == nums[i - 1] && !visited[i - 1]
        ) {
            continue;
        }

        path.push(nums[i]);
        visited[i] = true;
        permuteUniqueHelper(result, path, nums, visited);
        path.pop();
        visited[i] = false;
    }
}

var permuteUnique = function (nums) {
    let result = [], path = [], visited = [];
    nums.sort((a, b) => a - b);
    permuteUniqueHelper(result, path, nums, visited);
    return result;
};


console.log(permuteUnique([1, 1, 2]));