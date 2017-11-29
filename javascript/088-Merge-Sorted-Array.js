/*
 https://leetcode.com/problems/merge-sorted-array/#/description

 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

 Note:
 You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let cur1 = m - 1, cur2 = n - 1, pos = m + n - 1;

    while (cur1 >= 0 && cur2 >= 0) {
        if (nums1[cur1] < nums2[cur2]) {
            nums1[pos--] = nums2[cur2--];
        } else {
            nums1[pos--] = nums1[cur1--];
        }
    }

    while (cur2 >= 0) {
        nums1[pos--] = nums2[cur2--];
    }
}


var nums1 = [2, 0];
var nums2 = [1];
merge(nums1, 1, nums2, 1);


console.log(nums1);