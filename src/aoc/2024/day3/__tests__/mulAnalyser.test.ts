import {
  calculateTotalFromEnabledPhrases,
  calculateTotalFromPhrases, getMultiplyFromPhrase, getValidPhraseFromString
} from '../util/mulAnalyser';

test('should extract matching phrases from text', () => {
  const testText = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
  const expected = ['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)']
  const matchingPhrase = /mul\(\d{1,3},\d{1,3}\)/g
  expect(getValidPhraseFromString(testText, matchingPhrase)).toEqual(expected);
});

test('should multiply the mul digits', () => {
  expect(getMultiplyFromPhrase('mul(2,4)')).toEqual(8);
});

test('should get the total of all mul values', () => {
  expect(calculateTotalFromPhrases(['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)'])).toEqual(161);
});

test('should get the total of all enabled mul values', () => {
  const testString = 'xmul(2,4)&mul[3,7]!do()mul(8,5)^don\'t()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))';
  const expected = (2*4)+(8*5)+(8*5);
  const matchingPhrase = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g
  const validPhrases = getValidPhraseFromString(testString, matchingPhrase)

  expect(calculateTotalFromEnabledPhrases(validPhrases)).toEqual(expected);
});