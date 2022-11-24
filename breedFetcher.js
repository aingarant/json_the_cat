require("dotenv").config();
const request = require("request");
const apiKey = process.env.API_KEY;
let errorMessage = null;
let description = null;
const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}&api_key=` + apiKey;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const statusCode = response.statusCode;

    if (error) {
      errorMessage = `There was was an error! code:, ${statusCode}`;
      callback(errorMessage);
      return;
    }
    if (data.length === 0) {
      errorMessage = `The Breed name you entered was not found.`;
      callback(errorMessage);
      return;
    }
    description = `${data[0].description}`;
    callback(errorMessage, description);
  });
};

module.exports = { fetchBreedDescription };