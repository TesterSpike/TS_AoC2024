import {Day4puzzle2} from '../puzzle/day4puzzle2';

test('should get 18 matching words from loaded file', () => {
  expect(new Day4puzzle2().getCountOfCrossedMatchWordInGrid('src/aoc/day4/resources/Day4_Data_Test.txt', 'MAS')).toEqual(9);
});