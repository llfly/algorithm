let Crawler = require("crawler");
let Parse = require('./textparsing');


let crawler = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            let $ = res.$;
            let title = Parse.titleParse($(".question-title h3"));
            let description = Parse.descriptionParse($("#descriptionContent .question-description"));
            let CodeMirror = Parse.CodeMirrorParse($(".ReactCodeMirror .CodeMirror-scroll>.CodeMirror-sizer"));
            console.log(title, description, CodeMirror);//
        }
        done();
    }
});



module.exports = (URL) => crawler.queue(URL); 