let Crawler = require("crawler");
let debug = require('debug')('build')
let Parse = require('./textparsing');
let fs = require('fs');


module.exports = URL =>
    new Promise((resolve, reject) => {
        let crawler = new Crawler({
            maxConnections: 10,
            // This will be called for each crawled page
            callback: function (error, res, done) {
                let title = "", description = "", codeMirror = "";
                if (error) {
                    console.log(error);
                    reject({
                        title,
                        description,
                        codeMirror
                    });
                    debug("-- get data error --");
                } else {
                    let $ = res.$;
                    debug("-- get data callback --");

                    title = Parse.titleParse($(".question-title h3"));
                    description = Parse.descriptionParse($("#descriptionContent .question-description"));
                    codeMirror = Parse.CodeMirrorParse(String(res.body).match(/(?=codeDefinition:).*/)[0]);

                    debug("-- clear data done --");
                }
                done();

                resolve({
                    title,
                    description,
                    codeMirror
                });
            }
        });
        
        crawler.queue(URL);
    });