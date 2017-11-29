/*

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */


const letterHelper = (result, str, mapDigit, nums, pos) => {
    if (pos === nums.length) {
        result.push(str);
        return;
    }

    let d = mapDigit[nums[pos]];

    for (let i = 0; i < d.length; i++) {
        letterHelper(result, str + d[i], mapDigit, nums, pos + 1)
    }
}

var letterCombinations = function (digits) {
    let result = [], mapDigit = [null, null, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    if (!digits.length) {
        return result;
    }

    letterHelper(result, "", mapDigit, digits, 0);

    return result;
}


console.log(letterCombinations('49'));
