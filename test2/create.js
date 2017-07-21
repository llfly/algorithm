const fs = require('fs');
const path = require('path');

const textReg = /\.js$/;


const compose = (first, ...last) => (...initArgs) =>
    last.reduce((compose, func) =>
        func(compose), first(...initArgs))


// turn hello world ==> Hello-World
const camelCase = (str) =>
    str.replace(/\./, '').split(' ').map(item =>
        `${String(item).charAt(0).toUpperCase()}${String(item).substr(1)}`).join('-')

// fix postfix ==> Hello-World.js
const postfix = (filename) => !textReg.test(filename) ?
    filename += `.js` : filename


const filePath = (filename) => (basePath) => path.join(__dirname, basePath, filename)

// createFile
const createFile = (filepath) => {
    fs.writeFile(filepath, '/**/', function (err) {
        if (err) throw err;
        console.log("create File Success!");
    });
}


let targetStr = '95. Unique Binary Search Trees II';

createFile(compose(camelCase, postfix, filePath)(targetStr)('../leetcode'));
