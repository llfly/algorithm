// parsing for leetcode html
let $ = require('crawler/vendor/jquery-2.1.1.min.js');


const titleParse = (jq) => jq.text().trim();

const descriptionParse = (jq) => {
    console.log(jq);
}


const CodeMirrorParse = (jq) => {
    console.log(jq);
}


module.exports = {
    titleParse,
    descriptionParse,
    CodeMirrorParse
}