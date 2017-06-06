/*

 Given an index k, return the kth row of the Pascal's triangle.

 For example, given k = 3,
 Return [1,3,3,1].

 Note:
 Could you optimize your algorithm to use only O(k) extra space?

 */


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (parseInt(rowIndex) !== rowIndex || rowIndex < 0) {
        return [];
    }

    let arr = [];


    for (let i = 0; i <= rowIndex; i++) {
        arr.unshift(1);
        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1] + arr[j];
        }
    }
    return arr;

};

console.log(getRow(0));