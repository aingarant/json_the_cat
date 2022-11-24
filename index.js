// index.js
const { fetchBreedDescription } = require('./breedFetcher');
let breeds = process.argv.splice("2");

if (breeds.length === 0) {
  return console.log(`You did not enter a breed!`);
}

// Remove duplicate entries in input array.
breeds = [...new Set(breeds)];

// map through array of cat inputs.
breeds.map(breed => {
  fetchBreedDescription(breed, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });
});