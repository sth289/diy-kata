const { humanCatDogYears } = require('../src');

describe('humanCatDogYears returns number in the array of human, cat and dog years', () => {
    it('returns array of human, cat and dog years when passed human years', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64])
      expect(humanCatDogYears(9)).toEqual([9, 52, 59])
    });
  });
// Look Ma, no handlebars!!!
