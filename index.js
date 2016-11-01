var fs = require('fs');

var arr = [];
fs.readdirSync('./app/img').forEach(n => {
    arr.push(n);
});

console.log(arr);