import {Day5puzzle1} from '../puzzle/day5puzzle1';

test('should get sum of valid pages (143) from file', () => {
  expect(new Day5puzzle1().getCountOfValidPages('src/aoc/day5/resources/day5_data_test.txt')).toEqual(143)
});