/*
https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?



*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length, tmp;
    if (!n) {
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; ++j) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = tmp;
        }
    }

    //console.log(matrix);
};




rotate([[1, 2], [3, 4]]);
rotate([[1,2,3],[4,5,6],[7,8,9]]);
rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
rotate([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]])
rotate([[1]]);