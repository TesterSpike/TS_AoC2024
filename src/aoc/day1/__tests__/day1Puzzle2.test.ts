import {Day1Puzzle2} from "../puzzle/day1Puzzle2";

test('Similarity score should be correct', () => {
   expect(new Day1Puzzle2().getSimilarityScore('./src/aoc/day1/resources/Day1Puzzle1_test1.txt')).toEqual(31)
});