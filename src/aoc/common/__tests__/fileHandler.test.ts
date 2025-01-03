import {
  getLetterGridFromFileText,
  getNumberListsFromFileText,
  getStringFromFileName,
  getTextLinesFromFileName
} from "../util/fileHandler";
import {XMASGrid} from '../resources/commonConstants';

test('should extract string from file', () => {
  const expected = '7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9';
  expect(getStringFromFileName('./src/aoc/day2/resources/Day2_Data_Test.txt')).toEqual(expected);
});

test('file is read correctly', async () => {
  const expected = [
    '7 6 4 2 1',
    '1 2 7 8 9',
    '9 7 6 2 1',
    '1 3 2 4 5',
    '8 6 4 4 1',
    '1 3 6 7 9'
  ]
  expect(getTextLinesFromFileName('./src/aoc/day2/resources/Day2_Data_Test.txt')).toEqual(expected)
});

const expectedList = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"]

test('should extract string list from file', () => {
  expect(getTextLinesFromFileName('./src/aoc/day1/resources/Day1Puzzle1_test1.txt')).toEqual(expectedList);
});

test('string list is converted to a number list', async () => {
  const testList = ['7 6 4 2 1']
  expect(getNumberListsFromFileText(testList)).toEqual([[7, 6, 4, 2, 1]]);
});

test('string lists are converted to number lists', async () => {
  const testList = [
    '7 6 4 2 1',
    '1 2 7 8 9',
    '9 7 6 2 1',
    '1 3 2 4 5',
    '8 6 4 4 1',
    '1 3 6 7 9'
  ]
  const expected = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]
  ]
  expect(getNumberListsFromFileText(testList)).toEqual(expected);
});

test('should get text lines from file', () => {
  const expectedLines = ["MMMSXXMASM", "MSAMXMSMSA", "AMXSXMAAMM", "MSAMASMSMX", "XMASAMXAMM", "XXAMMXXAMA", "SMSMSASXSS", "SAXAMASAAA", "MAMMMXMMMM", "MXMXAXMASX"]
  expect(getTextLinesFromFileName('./src/aoc/day4/resources/Day4_Data_Test.txt')).toEqual(expectedLines);
})

test('should convert file of strings into grid', () => {
  expect(getLetterGridFromFileText(getTextLinesFromFileName('./src/aoc/day4/resources/Day4_Data_Test.txt'))).toEqual(XMASGrid)
})