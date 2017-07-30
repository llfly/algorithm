//http://www.lintcode.com/zh-cn/problem/subsets/

/*

所有的递归 都是在一棵树上进行的
 {1,2}


 {},{1},{1,2},{2}

//递归
//动规


//思考 Subsets

所有的递归都是在一棵树上进行的
eg:{1,2}


{},{1},{2},{1,2}
 //回溯法 back


 results 保留的结果
 list    当前操作子集
 nums    可选择的数
 pos     从nums里的那个数开始挑数

[1,2,3]

[1]
[1,2]
[1,2,3]
[1,3]
[2]
[2,3]
[3]


*/


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



/*
 http://lintcode.com/zh-cn/problem/unique-subsets

 [1,2,2]


 [],[1],[1,2],[1,2,2],[2],[2,2]
 unique subsets

 思路：
 1. 与Subsets有关，先使用Subsets模版
 2. 要求Unique的，想办法排除重复
 3. 思考哪些情况会重复 例如：{1,2(1),2(2),2(3)}，规定{1,2(1)}和{1,2(2)}重复
 {1,2(1),2(2)}和{1,2(2),2(3)}重复，观察规律
 4.得出规律：我们只关心取多少个2,不关心取哪几个
 5.规定必须从第一个2开始连续取（作为重复集合中的代表），如必须是{1,2(1)}不能是{1,2{2})
 6. 将逻辑转化为程序语言
 */


//Unique Subsets
// 先排序，再去重
const uniqueSubsetHelper = (result, path, list, pos) => {
    result.push(path.slice());
    for (let i = pos; i < list.length; i++) {
        if (i != pos && list[i] === list[i - 1]) {
            continue;
        }
        path.push(list[i]);
        subsetHelper(result, path, list, i + 1);
        path.splice(path.length - 1);
    }
}

const uniqueSubsets = (list) => {
    let result = [], path = [];
    list.sort((a, b) => a - b);
    uniqueSubsetHelper(result, path, list, 0);
    return result;
};

console.log(uniqueSubsets([1, 2, 3, 2]));