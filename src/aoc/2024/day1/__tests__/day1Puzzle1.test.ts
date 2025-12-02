import {Day1Puzzle1} from "../puzzle/day1Puzzle1";

test('Day1 Puzzle1 gets correct distance', async () => {
    expect(new Day1Puzzle1().getDistanceFromFile('./src/aoc/day1/resources/Day1Puzzle1_test1.txt')).toEqual(11);
});