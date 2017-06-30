
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