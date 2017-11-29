/*
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:

[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = [];
    if (n === 0) {
        return arr;
    }

    let rowBegin = 0;
    let rowEnd = n;
    let colBegin = 0;
    let colEnd = n;
    let num = 1;

    for (let i = 0; i < n; i++) {
        arr.push([]);
    }

    while (rowBegin < rowEnd && colBegin < colEnd) {
        //right
        for (let i = colBegin; i < colEnd; i++) {
            arr[rowBegin][i] = num++;
        }
        rowBegin++;

        //down
        for (let i = rowBegin; i < rowEnd; i++) {
            arr[i][colEnd - 1] = num++;
        }
        colEnd--;

        //left
        for (let i = colEnd - 1; i >= colBegin; i--) {
            arr[rowEnd - 1][i] = num++;
        }
        rowEnd--;

        //up
        for (let i = rowEnd - 1; i >= rowBegin; i--) {
            arr[i][colBegin] = num++;
        }
        colBegin++;

    }

    return arr;
};


console.log(generateMatrix(1));