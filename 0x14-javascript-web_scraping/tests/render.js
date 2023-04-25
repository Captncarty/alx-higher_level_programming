#!/usr/bin/env node

const request = require('request');
const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const fs = require('fs');

request(url, function(error, response, body) {
   /* if (error) {
        console.log(error);
    } else {
        console.log(JSON.parse(body).members[2]);
    }*/
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
});