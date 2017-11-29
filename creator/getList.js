let data = require('./list.json');
let fs = require('fs');


let newData = data.map(item => ({
    url : `https://leetcode.com${item.url}`,
    text: item.text
}));

fs.writeFileSync('./questList.json', JSON.stringify(newData));