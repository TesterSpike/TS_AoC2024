import {Day6puzzles} from '../puzzle/day6puzzles';

test('should get count of distinct locations', () => {
  expect(new Day6puzzles().getCountOfDistinctLocations('./src/aoc/day6/resources/day6_data_test.txt')).toEqual(41)
});