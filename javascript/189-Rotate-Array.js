/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

Related problem: Reverse Words in a String II


[1,2,3,4,5,6,7]
[7,6,5,4,3,2,1]
[5,6,7][1,2,3,4]
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;
    k %= len;

    const reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, len - 1);

    //console.log(nums);
};


rotate([1,2,3,4,5,6,7],3);
rotate([1,2,3,4,5],0);
rotate([1,2],9);
rotate([],10);