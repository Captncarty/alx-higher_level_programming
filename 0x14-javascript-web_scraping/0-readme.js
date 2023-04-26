#!/usr/bin/node
/* Write a script that reads and prints the content of a file.*/

const fs = require('fs');
file = process.argv[2];
fs.readFile(file, 'utf-8', function(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log(content);
    }
});
