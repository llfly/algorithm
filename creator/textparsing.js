// parsing for leetcode html
// let $ = require('crawler/vendor/jquery-2.1.1.min.js');

var htmlparser = require("htmlparser2");

const titleParse = (jq) => jq.text().trim();

const descriptionParse = (jq) => {
    if (!jq) return;
    let str = '';
    var parser = new htmlparser.Parser({
        onopentag: function (name, attribs) {
           
        },
        ontext: function (text) {
            str += text;
        },
        onclosetag: function (tagname) {
        }
    }, { decodeEntities: true });
    parser.write(jq);
    parser.end();
    return str;
}

const CodeMirrorParse = (jq) => {
    if (!jq) return;

    // let str = '';
    // var parser = new htmlparser.Parser({
    //     onopentag: function (name, attribs) {
    //         // console.log(name);
    //     },
    //     ontext: function (text) {
    //         str += text;
    //         // console.log(text);
    //     },
    //     onclosetag: function (tagname) {
    //     }
    // }, { decodeEntities: true });
    // parser.write(jq);
    // parser.end();
    // return str;
}


module.exports = {
    titleParse,
    descriptionParse,
    CodeMirrorParse
}