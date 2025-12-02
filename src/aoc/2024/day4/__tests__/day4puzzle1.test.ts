import {Day4puzzle1} from '../puzzle/day4puzzle1';

test('should get 18 matching words from loaded file', () => {
  expect(new Day4puzzle1().getCountOfMatchWordInGrid('src/aoc/day4/resources/Day4_Data_Test.txt', 'XMAS')).toEqual(18);
});