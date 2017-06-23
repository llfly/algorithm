//http://www.lintcode.com/zh-cn/problem/subsets/

/*
 // 所有的递归 都是在一棵树上进行的
 {1,2}


 {},{1},{1,2},{2}


 //回溯法


 */

//递归

//Subsets
const subsetHelper = (result, path, list, pos) => {
    result.push(path.slice());
    for (let i = pos; i < list.length; i++) {
        path.push(list[i]);
        subsetHelper(result, path, list, i + 1);
        path.splice(path.length - 1);
    }
};

const subsets = (list) => {
    let result = [], path = [];
    subsetHelper(result, path, list, 0);
    return result;
};


//console.log(subsets([1, 2, 3, 4]));


//Unique Subsets
const uniqueSubsetHelper = (result, path, list, pos) => {
    result.push(path.slice());
    for (let i = pos; i < list.length; i++) {
        if (i > 0 && i != pos && list[i] === list[i - 1]) {
            continue;
        }
        path.push(list[i]);
        subsetHelper(result, path, list, i + 1);
        path.splice(path.length - 1);
    }
}

const uniqueSubsets = (list) => {
    let result = [], path = [];
    list.sort((a,b)=>a-b);
    uniqueSubsetHelper(result, path, list, 0);
    return result;
};

console.log(uniqueSubsets([1, 2, 3, 2]));

//动规