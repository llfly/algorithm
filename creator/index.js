let debug = require('debug')('build');
let Creator = require('./create');
let Builder = require('./builder');



const URL = 'https://leetcode.com/problems/tenth-line/description/';


async function start() {
    let { title,
        description,
        codeMirror } = await Builder(URL);
    
    debug(`-- title         : ${title}          --`);
    debug(`-- description   : ${description}    --`);
    debug(`-- codeMirror    : ${codeMirror}     --`);


    if (!title) {
        return;
    }

    await Creator(title, description, codeMirror);

    debug(`-- create file done --`);
}







start();


