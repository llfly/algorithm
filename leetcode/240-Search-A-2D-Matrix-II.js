/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
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

    let n = matrix[0].length - 1;
    let start = 0;
    let end = m - 1;

    //切割掉后一半以上行
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        let mid_value = matrix[mid][0];
        if (mid_value === target) {
            return true;
        } else if (mid_value > target) {
            end = mid;
        } else if (mid_value < target) {
            start = mid;
        }
    }

    let colEnd = n;
    for (let i = 0; i <= end; i++) {
        let colStart = 0;//每次都从头开始，但 colEnd 是不断缩短的
        while (colStart + 1 < colEnd) {
            let mid = colStart + Math.floor((colEnd - colStart) / 2);

            if (matrix[i][mid] === target) {
                return true;
            } else if (matrix[i][mid] > target) {
                colEnd = mid;
            } else if (matrix[i][mid] < target) {
                colStart = mid;
            }
        }

        if (matrix[i][colStart] === target || matrix[i][colEnd] === target) {
            return true;
        }
    }
    return false;
};



var searchMatrix = function (matrix, target) {
    let m = matrix.length;

    if (m < 1 || matrix[0].length < 1) {
        return false;
    }

    let col = matrix[0].length - 1;
    let row = 0;

    while (col >= 0 && row <= m - 1) {
        let mid_value = matrix[row][col];
        if (target === mid_value) {
            return true;
        } else if (target < mid_value) {
            col--;
        } else if (target > mid_value) {
            row++;
        }
    }
    return false;
}



console.log(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5));


console.log(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 20));


console.log(searchMatrix([[1, 4, 7, 11, 15]], 15));
console.log(searchMatrix([[1, 4, 7, 11, 15]], 20));
console.log(searchMatrix([[1], [4], [7], [11], [15]], 4));
console.log(searchMatrix([[1], [4], [7], [11], [15]], 20));
console.log(searchMatrix([], 1));