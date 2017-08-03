/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {string[][]}
 */

const isValid = (arr, col) => {
    let row = arr.length;

    //console.log('before', arr);
    for (let i = 0; i < row; i++) {
        //same column
        if (arr[i] == col) {
            return false;
        }

        //console.log(i - arr[i], row - col);
        //left-top to right-bottom
        if (i - arr[i] == row - col) {
            return false;
        }

        //right-top to left-bottom
        if (i + arr[i] == row + col) {
            return false;
        }
    }
    return true;

}

const draw = (arr) => {
    let chessboard = [], len = arr.length;
    for (let i = 0; i < len; i++) {
        chessboard[i] = '';
        for (let j = 0; j < len; j++) {
            if (j == arr[i]) {
                chessboard[i] += 'Q';
            } else {
                chessboard[i] += '.';
            }
        }
    }

    return chessboard;
}


const queenHelper = (result, path, n) => {
    if (path.length === n) {
        result.push(draw(path.slice()));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (!isValid(path, i)) {
            continue;
        }
        path.push(i);
        queenHelper(result, path, n);
        path.splice(path.length - 1);
    }

}

var solveNQueens = function (n) {
    let result = [], path = [];
    queenHelper(result, path, n);
    return result;
};

console.log(solveNQueens(4));


/*

[ 1, 3, 0, 2 ]
[ 2, 0, 3, 1 ]

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

*/