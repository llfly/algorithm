const fs = require('fs');
const path = require('path');

const textReg = /\.js$/;

const compose = (first, ...last) => (...initArgs) =>
    last.reduce((compose, func) =>
        func(compose), first(...initArgs))

//padLeft
const padLeftZero = (str, pad = '000') => {
    let arr = str.split('.');
    return `${(pad + arr.shift()).slice(-pad.length)}.${arr.join('')}`;
}

// turn hello world ==> Hello-World
const camelCase = (str) =>
    str.replace(/\./, '').split(' ').map(item =>
        `${String(item).charAt(0).toUpperCase()}${String(item).substr(1)}`).join('-')

// fix postfix ==> Hello-World.js
const postfix = (filename) => !textReg.test(filename) ?
    filename += `.js` : filename


const filePath = (filename) => (basePath) => path.join(__dirname, basePath, filename)

const getText = (description, codeMirror) => `/*${description}*/ ${codeMirror}`;

// createFile
const createFile = (filepath, text) => {
    fs.writeFileSync(filepath, text, function (err) {
        if (err) throw err;
        console.log("create File Success!");
    });
}

module.exports = (targetStr, description, codeMirror) => 
    createFile(compose(padLeftZero, camelCase, postfix, filePath)(targetStr)('../leetcode'), getText(description, codeMirror));

