/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permutationsHelper = (result, path, list) => {
    if (path.length === list.length) {
        result.push(path.slice());
        return;
    }

    for (let i = 0; i < list.length; i++) {
        if (~path.indexOf(list[i])) {
            continue;
        }
        path.push(list[i]);
        permutationsHelper(result, path, list);
        path.splice(path.length - 1);
    }
}

var permute = function (nums) {
    let result = [], path = [];
    permutationsHelper(result, path, nums);
    return result;
};

console.log(permute([1, 2, 3]));
