let debug = require('debug')('build');
let Creator = require('./create');
let Builder = require('./builder');
let data = require('./questList.json');

const LANG = {
    "java": "java",
    "javascript": "javascript"
}

async function start(url) {
    const lang = LANG.javascript;
    let { title,
        description,
        codeMirror } = await Builder(url, lang);

    debug(`-- title         : ${title}          --`);
    debug(`-- description   : ${description}    --`);
    debug(`-- codeMirror    : ${codeMirror}     --`);


    if (!title) {
        return;
    }

    Creator(title, description, codeMirror, lang);

    debug(`-- create file done --`);
}


data.map(item => start(item.url))

// const URL = 'https://leetcode.com/problems/count-different-palindromic-subsequences';

// start(URL);


