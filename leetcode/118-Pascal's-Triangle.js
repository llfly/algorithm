/*

 Given numRows, generate the first numRows of Pascal's triangle.

 For example, given numRows = 5,
 Return

 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */


var generate = function (numRows) {
    if (parseInt(numRows) !== numRows || numRows <= 0) {
        return [];
    }

    let arr = [];

    for (let i = 0; i < numRows; i++) {
        let child = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                child.push(1);
            } else {
                child.push(arr[i - 1][j - 1] + arr[i - 1][j]);
            }
        }
        arr.push(child);
    }
    return arr;
};


var generate = function (numRows) {
    if (parseInt(numRows) !== numRows || numRows <= 0) {
        return [];
    }

    let arr = [], child = [];

    for (let i = 0; i < numRows; i++) {
        child.unshift(1);
        for (let j = 1; j < child.length - 1; j++) {
            child[j] += child[j + 1];
        }
        arr.push(child.slice());//注意引用类型
    }
    return arr;
}


//test
console.log(generate(5));




