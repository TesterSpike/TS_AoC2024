import {getListsFromFileText, getTextListsFromFileName} from "../util/fileHandler";

test('file is read correctly', async () => {
    const expected = [
        '7 6 4 2 1',
        '1 2 7 8 9',
        '9 7 6 2 1',
        '1 3 2 4 5',
        '8 6 4 4 1',
        '1 3 6 7 9'
    ]
    expect(getTextListsFromFileName('./src/aoc/day2/resources/Day2_Data_Test.txt')).toEqual(expected)
});

const expectedList = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"]

test('should extract string list from file', () => {
    expect(getTextListsFromFileName('./src/aoc/day1/resources/Day1Puzzle1_test1.txt')).toEqual(expectedList);
});

test('string list is converted to a number list', async () => {
    const testList = ['7 6 4 2 1']
    expect(getListsFromFileText(testList)).toEqual([[7, 6, 4, 2, 1]]);
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
    expect(getListsFromFileText(testList)).toEqual(expected);
});