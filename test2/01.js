// 求二进制数中1的个数


//任意给定一个32位无符号整数n，求n的二进制表示中1的个数，比如n = 5（0101）时，返回2，n = 15（1111）时，返回4


const bitCount1 = n => {
    let count = 0;
    while(n > 0){
        if((n & 1) == 1)
            count++;
        n >>=1;
    }
    return count;
}


const bitCount2 = n => {
    let count = 0;
    for(count = 0; n; n>>=1)
        count += n & 1;
    return count
}


console.log(bitCount1(12));
console.log(bitCount2(12));


