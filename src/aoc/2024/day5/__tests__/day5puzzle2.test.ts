import {Day5puzzle2} from '../puzzle/day5puzzle2';

test('should get sum of invalid pages (123) from file', () => {
  expect(new Day5puzzle2().getCountOfInvalidPages('src/aoc/day5/resources/day5_data_test.txt')).toEqual(123)
});