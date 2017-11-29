let debug = require('debug')('build');
let Creator = require('./create');
let Builder = require('./builder');

const LANG = {
    "java": "java",
    "javascript": "javascript"
}


const URL = 'https://leetcode.com/problems/tenth-line/description/';


async function start() {
    const lang = LANG.java;
    let { title,
        description,
        codeMirror } = await Builder(URL, lang);

    debug(`-- title         : ${title}          --`);
    debug(`-- description   : ${description}    --`);
    debug(`-- codeMirror    : ${codeMirror}     --`);


    if (!title) {
        return;
    }

    Creator(title, description, codeMirror, lang);

    debug(`-- create file done --`);
}







start();


