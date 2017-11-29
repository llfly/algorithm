/*

Implement int sqrt(int x).

Compute and return the square root of x.

 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x;
    }

    let start = 0;
    let end = x;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (x / mid < mid) {
            end = mid;
        } else {
            if (x / (mid + 1) < (mid + 1)) {
                return mid;
            }
            start = mid;
        }
    }

};


console.log(mySqrt(1000));
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(4));
console.log(mySqrt(100));