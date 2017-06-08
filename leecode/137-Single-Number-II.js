/*
 Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
//遍历？

    /*
var singleNumber = function (nums) {
    var savedNums = [];
    for (let i = 0; i < nums.length; i++) {
        let cursor = nums[i];
        let index = savedNums.indexOf(cursor);
        if (~index) {
            savedNums.splice(index, 1);

        } else {
            savedNums.push(cursor);
        }
    }
};
//转成二进制，进行 各位取余？


*/
var singleNumber = function (nums) {
    const log = (text,num) => console.log(text,num);

    let first = 0, second = 0, third = 0;
    for (let i = 0; i < nums.length; i++) {
        second ^= (first & nums[i]);
        console.log("second",second);
        first ^= nums[i];
        console.log("first",first);
        third = ~(first & second);
        console.log("third",third);
        second &= third;
        console.log("second",second);
        first &= third;
        console.log("first",first);
    }
    return first;

}

var test = (a,b) => {
    console.log(a,b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(a,b);
}


//101001101这样的形式，int类型占内存4个字节，也就是32位。那么，如果一个数字在数组中出现了三次，比如18，二进制是10010，所以第一位和第四位上的1，也都各出现了3次。

//(18,18,18,1)


singleNumber([18,18,18,9,9,9,1])

/*
 second = 0 ^ (0 & 18) = 0;
 first  = 0 ^ 18 = 18;
 third  = ~ ( 0 & 18 ) = -1;
 second = -1 & 0 = 0;
 first = -1 & 18 = 18;

 second = 0 ^ (18 & 18) = 18;
 first = 18 ^ 18 = 0;
 third = ~ (0 & 18) = -1;
 second = 18 & -1 = 18;
 first = 18 & 0 = 0;

 second = 0 ^ (18 & 18) = 18;
 first 18
 third -19
 second 0
 first 0

 second 0
 first 9
 third -1
 second 0
 first 9

 second 9
 first 0
 third -1
 second 9
 first 0

 second 9
 first 9
 third -10
 second 0
 first 0

 second 0
 first 1
 third -1
 second 0
 first 1

*/