#!/usr/bin/node
/* Playing with request */

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
let episode = process.argv[2];
request(url + episode, (err, response, body) => {
  console.log('statuscode:', response && response.statusCode);
  if (err) {
    throw err;
  } else {
    console.log('Work of my Body:', JSON.parse(body)['planets']);
  }
});