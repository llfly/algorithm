let quickSort = (arr, start, end) => {
    if ((end - start) <= 1) {
        return arr;
    }
    let i = start, j = end, tmp = arr[start];
    while (i < j) {
        for (; i < j && arr[j] >= tmp; j--);
        arr[i++] = arr[j];
        for (; i < j && arr[i] < tmp; i++);
        arr[j--] = arr[i];
    }
    arr[i] = tmp;
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
}


let arr = [5, 2, 6, 7, 10, 2, 3, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);






