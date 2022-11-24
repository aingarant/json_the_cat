const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(err, null);
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('Error - If a non-existent cat, or spelling error made with breed name..', (done) => {
    fetchBreedDescription('asdf', (err, desc) => {
      const expected = "The Breed name you entered was not found.";
      assert.equal(err, expected);
      done();
    });
  });


});