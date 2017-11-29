/*
 Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]

 */


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const combineHelper = (result, sum, list, pos, k) => {
    if (sum.length == k) {
        result.push(sum.slice());
    }

    for (let i = pos; i < list.length; i++) {
        sum.push(list[i]);
        combineHelper(result, sum, list, i + 1, k);
        sum.pop();
    }
};

var combine = function (n, k) {
    let list = [], result = [], sum = [];
    if (n <= 0) {
        return [];
    }

    for (let i = 1; i <= n; i++)
        list.push(i);

    combineHelper(result, sum, list, 0, k);

    return result;
};



console.log(combine(4, 1));