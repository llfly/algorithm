// parsing for leetcode html
// let $ = require('crawler/vendor/jquery-2.1.1.min.js');

var htmlparser = require("htmlparser2");
var parser = new htmlparser.Parser({
    onopentag: function (name, attribs) {
        // if(name === "script" && attribs.type === "text/javascript"){
        // 	console.log("JS! Hooray!");
        // }
        if (name == 'code' || name == 'pre') {
            console.log("----");
        }
    },
    ontext: function (text) {
        console.log(text);
    },
    onclosetag: function (tagname) {
        if (tagname === "code" || tagname == 'pre') {
            console.log('----');
        }
    }
}, { decodeEntities: true });




console.log(parser);


const titleParse = (jq) => jq.text().trim();

const descriptionParse = (jq) => {
    // console.log(jq);
    if (!jq) return;

    parser.write(jq);
    parser.end();
}


/*
{ type: 'tag',
name: 'p',
attribs: {},
children:
 [ { data: 'Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.',
     type: 'text',
     next: null,
     prev: null,
     parent: [Circular] } ],
next:
 { type: 'tag',
   name: 'p',
   attribs: {},
   children: [],
   next:
    { data: '\n      ',
      type: 'text',
      next: null,
      prev: [Circular],
      parent: [Object] },
   prev: [Circular],
   parent:
    { type: 'tag',
      name: 'div',
      attribs: [Object],
      children: [Object],
      next: [Object],
      prev: [Object],
      parent: [Object] } },
prev:
 { type: 'tag',
   name: 'p',
   attribs: {},
   children: [],
   next: [Circular],
   prev:
    { data: '\n        ',
      type: 'text',
      next: [Circular],
      prev: null,
      parent: [Object] },
   parent:
    { type: 'tag',
      name: 'div',
      attribs: [Object],
      children: [Object],
      next: [Object],
      prev: [Object],
      parent: [Object] } },
parent:
 { type: 'tag',
   name: 'div',
   attribs: { class: 'question-description' },
   children: [ [Object], [Object], [Circular], [Object], [Object] ],
   next:
    { data: '\n      ',
      type: 'text',
      next: [Object],
      prev: [Circular],
      parent: [Object] },
   prev:
    { data: '\n      ',
      type: 'text',
      next: [Circular],
      prev: [Object],
      parent: [Object] },
   parent:
    { type: 'tag',
      name: 'div',
      attribs: [Object],
      children: [Object],
      next: [Object],
      prev: [Object],
      parent: [Object] } } }
*/







const CodeMirrorParse = (jq) => {
    //console.log(jq);
}


module.exports = {
    titleParse,
    descriptionParse,
    CodeMirrorParse
}