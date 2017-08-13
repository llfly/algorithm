const URL = 'http://www.amazon.com';


let Crawler = require("crawler");


let c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            let $ = res.$;
            console.log($("title").text());
        }
        done();
    }
});



c.queue(URL);