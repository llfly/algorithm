/*
 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

 For example,
 Given the following matrix:

 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 You should return [1,2,3,6,9,8,7,4,5].
 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = [], rowEnd = matrix.length;
    if (rowEnd === 0) {
        return res;
    }

    let rowBegin = 0;
    let colBegin = 0;
    let colEnd = matrix[0].length;


    while (rowBegin < rowEnd && colBegin < colEnd) {

        //right
        for (let i = colBegin; i < colEnd; i++) {
            res.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        //down
        for (let i = rowBegin; i < rowEnd; i++) {
            res.push(matrix[i][colEnd - 1]);
        }
        colEnd--;

        //left
        if(rowBegin < rowEnd){
            for (let i = colEnd - 1; i >= colBegin; i--) {
                res.push(matrix[rowEnd - 1][i]);
            }
            rowEnd--;
        }

        //up
        if(colBegin < colEnd){
            for(let i = rowEnd -1; i >= rowBegin;i--){
                res.push(matrix[i][colBegin]);
            }
            colBegin++;
        }
    }

    return res;
};

console.log(spiralOrder( [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]));
console.log(spiralOrder([[2,3]]));
console.log(spiralOrder([
    [3],
    [6],
    [9]
]))