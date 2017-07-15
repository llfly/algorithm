/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

*/


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [], sum = 0, len = tokens.length;

    if (!len) {
        return 0;
    }

    for(let i = 0; i < len; i++){
        switch (tokens[i]){
            case '+':

            case '-':


            case '*':


            case '/':
                
        }
    }


};