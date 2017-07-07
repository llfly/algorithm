
//recursion or while ? recursion 会堆栈溢出 while 容易死循环 推荐 while

//first index

const binarySearch = (arr, target) => {
    if (arr.length === 0) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start + 1 < end) {
        mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            start = mid;
        } else if (arr[mid] < target) {
            start = mid;
        } else if (arr[mid] > target) {
            end = mid;
        }
    }

    if (arr[start] == target) {
        return start;
    }

    if (arr[end] == target) {
        return end;
    }

    return -1;
}


console.log(binarySearch([1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 10], 3))


//keyPoints

// start + 1 < end
// 退出情况: start === end or start === end - 1; 相邻退出 不会导致死循环

// 取中位数： start + (end - start) / 2  保证 int 的不溢出

// arr[mid] == target  first postion ==> end = mid 让 mid 向左边靠

// 循环结束后判断 start && end 
// first position 先判断 start  end position 先判断 end ? 



//Test

// [1,1,2,3,3,3,4,5,6] ==> [3,5] 两次二分 arr[mid] == target   end = mid   start = mid;
// [1,3,5,6] 5 => 2;2 => 1;7 => 4;0 => 0 找到第一个大于等于 target 的位置 target < arr[0]   or start + 1
// last end of target
// search 2D martix
// search 2D martix II Quadrate Search 四分
// first bad version 
// find peak element  [1,2,1,3,4,5,7,6]



/**
 * first or last position of   ==> binary search
 * O(n) ==> O(logn)
 * 
 */


// Search in Rotated Sorted Array https://leetcode.com/problems/search-in-rotated-sorted-array/
// Search in Rotated Sorted Array II https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// Find Minimum in Rotated Soted Array
// Find Minimum in Rotated Soted Array II
// Merge sorted Array
// Merge sorted Array II



const search = (A, target) => {
    let start = 0, end = A.length - 1, mid;

    while (start + 1 < end) {
        mid = start + (end - start) / 2;
        if (A[mid] == target) {
            return mid;
        }

        if (A[start] < A[mid]) {
            if (A[start] <= target && target <= A[mid]) {
                end = mid;
            } else {
                start = mid;
            }
        } else {
            if (A[mid] <= target && target <= A[end]) {
                start = mid;
            } else {
                end = mid;
            }
        }
    }//while

    if (A[start] == target) {
        return start;
    }
    if (A[end] == target) {
        return end;
    }

    return -1;
}

// 基于比较的排序，最快是nlogn


// Median of Two Sorted Arrays https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * (n + m) / 2
 * O(log(n + m))
 * 
 * find kth element in two sorted array
 * O(log k)
 * => k
 * => k/2
 * ...
 * log(k)
 * 
 * 
 * O(1) A数组和B数组中，删掉k/2个前k个数量的数
 * => 挪动A数组或者B数组的起始位置下标
 * => 要么A删掉前k/2个数，要么B删掉前k/2个数
 * => 需要比较A[k/2]和B[k/2]来决定删谁
 * if(A[k/2]<B[k/2]){
 * // A的[k/2]都在C中，即A[k/2]之前不包含第k个数，可以都扔掉
 * }
 * k - k/2
 */


// Recover Sorted Array
// [4,5,1,2,3] => [1,2,3,4,5] O(1) O(n)
// 三步反转
// [4,5] [1,2,3]
// [5,4] [3,2,1]
// [1,2,3,4,5]
// Rotate String
// Reverse Words in a string
// Remove Duplicates from Sorted Array I,II