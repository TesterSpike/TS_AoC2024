import {Day3Puzzle1} from '../puzzle/day3Puzzle1';
import {validPhrase} from '../util/matchers';

test('should get the correct valid mul calculation result', () => {
  const result = new Day3Puzzle1().getSumOfValidMul('src/aoc/day3/resources/Day3_Data_Test1.txt', validPhrase)
  expect(result).toEqual(161);
});