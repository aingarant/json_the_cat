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
      errorMessage = `There was was an error! \n code:', ${statusCode} \n\n`;
      callback(errorMessage);
      return;
    }
    if (data.length === 0) {
      errorMessage = `${breedName}\nThe Breed name (${breedName}) was not found. \n\n`;
      callback(errorMessage);
      return;
    }
    description = `${breedName}\n${data[0].description}\n`;
    callback(errorMessage, description);
  });
};

module.exports = { fetchBreedDescription };