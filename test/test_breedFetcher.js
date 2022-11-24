const chai = require('chai'); // 1
const assert = chai.assert;

const fetchBreedDescription = require('../index.js'); // 


describe("#fetchBreedDescription()", function() {


  
    it("should return false if it's a hatchback", function() {
    const catBreed = "Siberian";
    const expectedReponse = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
    assert.strictEqual(fetchBreedDescription(catBreed,null));
  });

});