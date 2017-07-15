/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length, stack = [];

    if(!len) {
        return true;
    }

    for (let i = 0; i < len; i++){
        let item = s[i];

        if (item === '(' || item === '[' || item === '{') {
            stack.push(item);
        } else {
            let top = stack[stack.length - 1];
            if (top) {
                if (item === ')' && top === '(' || item === ']' && top === '[' || item === '}' && top === '{'){
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                return false;
            }

        }
    }
    return stack.length ? false : true;
};

let s1 = '((([])))';
let s2 = '([{]})';

console.log(isValid(s1));
console.log(isValid(s2));