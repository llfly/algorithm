/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]

*/


/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (s) => {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s.charAt(left) != s.charAt(right))  
            return false;  
        left++;  
        right--;  
    }

    return true;
}

const partitionHelper = (result, path, s, pos) => {
    if(pos == s.length) {
        result.push(path.slice());
        return;
    }


    for(let i = pos; i < s.length; i++) {
        let prefix = s.substring(pos, i + 1);  
        if (!isPalindrome(prefix)) {
            continue;
        }
        path.push(prefix);
        partitionHelper(result, path, s, i + 1);
        path.pop();
    }
}
 

var partition = function(s) {
    let result = [], path = [];
    partitionHelper(result, path, s, 0);
    return result;
};



console.log(partition("aab"));