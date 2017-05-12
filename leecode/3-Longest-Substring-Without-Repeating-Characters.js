/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 Subscribe to see which companies asked this question.

 */



/**
 * @param {string} s
 * @return {number}
 */
//Time Limit Exceeded
    /*
var lengthOfLongestSubstring = function(s) {
    if(!s.length)
        return 0;
    var arr =[],max = 1;
    for(let i = 0, j = 0;i< s.length && j < s.length;){
        if(arr.length === 0){
            arr.push(s.charAt(j++));
        }else{
            if(~arr.indexOf(s.charAt(j))){
                arr = [];
                i++;
                j = i;
            }else{
                arr.push(s.charAt(j++));
                max = Math.max(max,arr.length);
            }

        }
    }
    return max;
};
*/


var lengthOfLongestSubstring = function(s){
    var i = 0, j = 0,maxLen = 0,obj={},len = s.length;
    while(j < len){
        if(obj[s[j]]){
            maxLen = Math.max(maxLen,j-i);
            while(s[i]!=s[j]){
                obj[s[i]] = false;
                i++;
            }
            i++;
            j++;
        }else{
            console.log(obj);
            obj[s[j]] = true;
            j++;
        }
    }
    maxLen = Math.max(maxLen,len-i);
    return maxLen;
};
