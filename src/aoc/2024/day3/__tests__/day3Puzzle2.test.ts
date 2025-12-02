import {Day3Puzzle2} from '../puzzle/day3Puzzle2';
import {validEnabledPhrase} from '../util/matchers';

test('should get the correct valid and enabled mul calculation result', () => {
  const result = new Day3Puzzle2().getSumOfValidEnabledMul('src/aoc/day3/resources/Day3_Data_Test2.txt', validEnabledPhrase)
  expect(result).toEqual(48);
});