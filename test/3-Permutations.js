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
        path.splice(path.length - 1);
    }
}


const permutations = (list) => {
    let result = [], path = [];
    permutationsHelper(result, path, list);
    return result;
}



// Unique Permutation
