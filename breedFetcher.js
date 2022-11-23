const breed = process.argv[2];
const request = require("request");
const apiKey = "live_UVytdYkua7iZS2VdGtGGqFN1fkkN8Wpjg8Ivq20nnruCN8Rk4ZVsx5y0Vzqhtnge";
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}&api_key=` + apiKey;

if (!breed) {
  return console.log("You did not enter a breed!");
}

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  const statusCode = response.statusCode;

  if (error) {
    return console.log(' There was was an error! \n code:', statusCode);
  }
  if (data.length === 0) {
    return console.log(`Your entered breed (${breed}) was not found`);
  }
  const info = data[0];
  console.log(info.description);
});