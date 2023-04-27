#!/usr/bin/node
/* httpCreateServer ----> more on request */

let fs = require('fs');
let request = require('request');

request.get('http://google.com/img.png', (err, response) => {
    console.log(response.status);
    console.error("err:", err);
    console.log(response.headers['content-type'])
})
.pipe(request.put('http://mysite.com/img.png'))

