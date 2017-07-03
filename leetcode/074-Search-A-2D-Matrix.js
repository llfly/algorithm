/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * For example,
 * Consider the following matrix:
 * [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * Given target = 3, return true.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    if (m === 0) {
        return false;
    }

    let n = matrix[0].length;
    if( n === 0) {
        return false;
    }
    let start = 0;
    let mid;
    let end = m * n - 1;


    while (start + 1 < end) {
        mid = start + Math.floor((end - start) / 2);
        let mid_value = matrix[Math.floor(mid / n)][mid % n];
        if (mid_value === target) {
            return true;
        } else if (mid_value > target) {
            end = mid;
        } else if (mid_value < target) {
            start = mid;
        }
    }

    if (matrix[Math.floor(start / n)][start % n] === target || matrix[Math.floor(end / n)][end % n] === target) {
        return true;
    } else {
        return false;
    }
};

console.log(searchMatrix([[1, 3, 5, 7],[10, 11, 16, 20],[23, 30, 34, 50]], 3));
console.log(searchMatrix([[1]], 1));
console.log(searchMatrix([[1, 2, 3]], 1));
console.log(searchMatrix([[1, 2, 3], [4, 5, 6]], 0));
console.log(searchMatrix([[1], [3]], 3));
console.log(searchMatrix([[1], [2], [3], [4]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],3))