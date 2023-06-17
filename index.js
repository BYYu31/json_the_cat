// index.js
const { fetchBreedDescription } = require('./breedFetcher');

let catBreed = process.argv[2];

fetchBreedDescription(catBreed,(error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});