const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,((error, response, body) => {
    if (error) {
      callback(error,body);
    } else if (response.statusCode === 404) {
      error = 'something wrong';
      callback(error,body);
    } else if (body.length === 2) {
      error = 'No such cat';
      body = null;
      callback(error, body);
    } else {
      const data = JSON.parse(body)[0]['description'];
      callback(error, data);
    }
  }));
};



module.exports = { fetchBreedDescription };