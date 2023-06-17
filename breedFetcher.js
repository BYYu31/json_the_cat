const request = require('request');

let catBreed = process.argv[2];

let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + catBreed;

request(URL,((error, response, body) => {
  if (error) {
    console.log(`omg this happened: ${error}`);
  } else if (response.statusCode === 404) {
    console.log('something wrong');
  } else {
    const data = body.length === 2 ? 'No such cat' : JSON.parse(body)[0]['description'];
    console.log(data);
  }
}));
