/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/

/**
 * @param {string} s
 * @return {string[]}
 */

const addressHelper = (result, path, str, pos) => {
    if (pos == str.length && path.length == 4) {
        result.push(path.join('.'));
        return;
    }

    for (let i = pos; i < str.length; i++) {
        let ip = str.substring(pos, i + 1);
        if (ip > 255 || /^0\d+/.test(ip)) {
            continue;
        }
        path.push(ip);
        addressHelper(result, path, str, i + 1);
        path.pop();
    }
}

var restoreIpAddresses = function (s) {
    if (s.length > 12) {
        return [];
    }

    let result = [], path = [];
    addressHelper(result, path, s, 0);
    return result;
};



console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses('111111111111111111111111111111111111111111111111111111111111111111'));
console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses("010010"));