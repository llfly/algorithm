/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
    nums1 = [1, 3]
    nums2 = [2]
    The median is 2.0

Example 2:
    nums1 = [1, 2]
    nums2 = [3, 4]
    The median is (2 + 3)/2 = 2.5

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedian = function (A_arr, A_start, B_arr, B_start, mid) {

    console.log('start', A_start, B_start, mid);
    if (A_start > A_arr.length) {
        console.log('B_start', B_start[B_start + mid - 1]);
        return B_start[B_start + mid - 1];
    }

    if (B_start > B_arr.length) {
        console.log('A_start', A_start[A_start + mid - 1]);
        return A_start[A_start + mid - 1];
    }

    if (mid === 1) {
        console.log('mid', A_arr[A_start], B_arr[B_start]);
        return Math.min(A_arr[A_start], B_arr[B_start]);
    }

    let k = Math.floor(mid / 2);

    let A_key = A_start + k - 1 < A_arr.length ? A_arr[A_start + k - 1] : Number.MAX_SAFE_INTEGER;
    let B_key = B_start + k - 1 < B_arr.length ? B_arr[B_start + k - 1] : Number.MAX_SAFE_INTEGER;

    console.log('key', k, A_key, B_key);
    if (A_key < B_key) {
        return findMedian(A_arr, A_start + k, B_arr, B_start, mid - k);
    } else {
        return findMedian(A_arr, A_start, B_arr, B_start + k, mid - k);
    }

}

var findMedianSortedArrays = function (nums1, nums2) {

    let len = nums1.length + nums2.length;
    let k = Math.floor(len / 2);
    let mid;
    if (len % 2 === 0) {
        mid = (findMedian(nums1, 0, nums2, 0, k) + findMedian(nums1, 0, nums2, 0, k + 1)) / 2
        console.log(mid);
    } else {
        mid = findMedian(nums1, 0, nums2, 0, k + 1);//[1,3],0,[2],0,2
        console.log(mid);
    }
    return mid;
};



//findMedianSortedArrays([1, 3], [2]);
//findMedianSortedArrays([1, 2], [3, 4]);
//findMedianSortedArrays([1], [3, 4]);