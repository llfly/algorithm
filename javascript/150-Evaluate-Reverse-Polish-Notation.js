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
    let stack = [], len = tokens.length, first, second;

    if (!len) {
        return 0;
    }

    for (let i = 0; i < len; i++) {
        let key = tokens[i];
        if (key === '+' || key === '-' || key === '*' || key === '/') {
            first = stack.pop();
            second = stack.pop();
            switch (key) {
                case '+':
                    stack.push(first + second);
                    break;
                case '-':
                    stack.push(second - first);
                    break;
                case '*':
                    stack.push(first * second);
                    break;
                case '/':
                    stack.push(parseInt(second / first));
                    break;
            }
        } else {
            stack.push(Number(key));
        }
    }
    return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));// 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));// 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));//22
