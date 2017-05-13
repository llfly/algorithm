//http://www.lintcode.com/zh-cn/problem/strstr/

/**
 * Returns a index to the first occurrence of target in source,
 * or -1  if target is not part of source.
 * @param source string to be scanned.
 * @param target string containing the sequence of characters to match.
 */

const strStr = (source,target) => {
    //异常处理

    let len = source.length;

    for(var i = 0 ; i < len;i++){
        let j = i, k = 0;
        while(source[j++] == target[k++]){
            if(k == target.length){
                return 1;
            }
        }
    }

    return -1;
};


console.log(strStr('abcdabcdefg','abc'));
