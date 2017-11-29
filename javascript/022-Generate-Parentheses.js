/*
 https://leetcode.com/problems/generate-parentheses/

 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 For example, given n = 3, a solution set is:


 [
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
 ]

*/

/**
 * @param {number} n
 * @return {string[]}
 */

const generateHelper = (result, str, left, right) => {
    if (right < left) {
        return;
    }
    
    if (left === 0 && right === 0) {
        result.push(str);
    }

    if (left > 0) {
        generateHelper(result, str + '(', left - 1, right);
    }

    if (right > 0) {
        generateHelper(result, str + ')', left, right - 1);
    }
}

var generateParenthesis = function (n) {
    if (n <= 0) {
        return [];
    }

    let result = [], str = '';
    generateHelper(result, str, n, n);
    return result;
};


console.log(generateParenthesis(3));