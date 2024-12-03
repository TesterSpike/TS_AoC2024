import {getTextFromFile} from "../util/fileHandler";
const expectedList = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"]

test('should extract string list from file', () => {
   expect(getTextFromFile('./src/aoc/day1/resources/Day1Puzzle1_test1.txt')).toEqual(expectedList);
});