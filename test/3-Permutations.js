// Permutation Sequence

const permutationsHelper = (result, path, list) => {
    if (path.length === list.length) {
        result.push(path.slice());
        return;
    }

    for (let i = 0; i < list.length; i++) {
        if (~path.indexOf(list[i])) {
            continue;
        }
        path.push(list[i]);
        permutationsHelper(result, path, list);
        path.pop();
    }
}


const permutations = (list) => {
    let result = [], path = [];
    permutationsHelper(result, path, list);
    return result;
}



// Unique Permutation


const uniquePermutationHelper = (result, path, list, visited) => {
    if (path.length == list.length) {
        result.push(path.slice());
        return;
    }

    for (let i = 0; i < list.length; i++) {
        if (visited[i] ||
            i != 0 && list[i] == list[i - 1] && !visited[i - 1]// 如果 第 i 和 i - 1 个数相等，且 i - 1 未取过 （避免越界，排除第 0 个数）
        ) {
            continue;
        }

        visited[i] = true;// 表示 path 中是否有第 i 个数
        path.push(list[i]);
        uniquePermutationHelper(result, path, list, visited);// 递归之后 需要还原之前的所有操作 回溯
        path.pop();
        visited[i] = false;// 被 splice 掉，所以需要 set false
    }
}

const uniquePermutation = (list) => {
    let result = [], path = [], visited = new Array(list.length).fill(false);
    list.sort((a, b) => a - b);
    uniquePermutationHelper(result, path, list, visited);
    return result;
}


console.log(uniquePermutation([1, 2, 2]));

// [1, 2(1) ,2(2), 2(3)]

// 什么情况下 需要 continue ?
// 
// permutation & subsets
// letter combinations of a phone number
// combination sum
// palindrome partitioning
// n queens
