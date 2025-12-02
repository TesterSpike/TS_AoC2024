import {
  getCountFromElementLocation,
  getCountOfMatchingWordInGrid, hasSpaceDown, hasSpaceLeft, hasSpaceRight, hasSpaceUp,
  isMatchingWordDiagonalLeftDown,
  isMatchingWordDiagonalLeftUp,
  isMatchingWordDiagonalRightDown, isMatchingWordDiagonalRightUp,
  isMatchingWordDown,
  isMatchingWordLeft,
  isMatchingWordRight,
  isMatchingWordUp
} from '../util/gridWordAnalyser';
import {XMASGrid} from '../../common/resources/commonConstants';

const constrainedGrid = [
  ['X', 'M', 'A', 'S'],
  ['M', 'M', 'A', 'A'],
  ['A', 'M', 'A', 'M'],
  ['S', 'A', 'M', 'X'],
]
const testWord = 'XMAS'

test.each([['should match', 1, 4, true], ['should not match', 2, 4, false]])
('left: %s', (_, row, col, expected) => {
  expect(isMatchingWordLeft(XMASGrid, row, col, testWord)).toEqual(expected);
});

test('should match left when just enough space', () => {
  expect(isMatchingWordLeft(constrainedGrid, 3, 3, testWord)).toEqual(true);
});

test.each([['should match', 4, 0, true], ['should not match', 5, 0, false]])
('right: %s', (_, row, col, expected) => {
  expect(isMatchingWordRight(XMASGrid, row, col, testWord)).toEqual(expected);
});

test('should match right when just enough space', () => {
  expect(isMatchingWordRight(constrainedGrid, 0, 0, testWord)).toEqual(true);
});

test.each([['should match', 4, 6, true], ['should not match', 4, 7, false]])
('up: %s', (_, row, col, expected) => {
  expect(isMatchingWordUp(XMASGrid, row, col, testWord)).toEqual(expected);
});

test('should match when just enough space up', () => {
  expect(isMatchingWordUp(constrainedGrid, 3, 3, testWord)).toEqual(true);
});

test.each([['should match', 3, 9, true], ['should not match', 0, 4, false]])
('down: %s', (_, row, col, expected) => {
  expect(isMatchingWordDown(XMASGrid, row, col, testWord)).toEqual(expected);
});

test('should match when just enough space down', () => {
  expect(isMatchingWordDown(constrainedGrid, 0, 0, testWord)).toEqual(true);
});

test.each([['should match', 9, 3, true], ['should not match', 3, 9, false]])
('left up: %s', (_, row, col, expected) => {
  expect(isMatchingWordDiagonalLeftUp(XMASGrid, row, col, testWord)).toEqual(expected);
});

test.each([['should match', 3, 9, true], ['should not match', 0, 4, false]])
('left down: %s', (_, row, col, expected) => {
  expect(isMatchingWordDiagonalLeftDown(XMASGrid, row, col, testWord)).toEqual(expected);
});

test.each([['should match', 9, 1, true], ['should not match', 8, 5, false]])
('right up: %s', (_, row, col, expected) => {
  expect(isMatchingWordDiagonalRightUp(XMASGrid, row, col, testWord)).toEqual(expected);
});

test.each([['should match', 0, 4, true], ['should not match', 0, 5, false]])
('right down: %s', (_, row, col, expected) => {
  expect(isMatchingWordDiagonalRightDown(XMASGrid, row, col, testWord)).toEqual(expected);
});

test('should have the correct count at specific location', () => {
  expect(getCountFromElementLocation(XMASGrid, 9, 3, 'XMAS')).toEqual(2)
});

test('should have space up', () => {
  expect(hasSpaceUp(3,4)).toBeTruthy();
});

test('should have space down', () => {
  expect(hasSpaceDown(3, 4, 7)).toBeTruthy();
});

test('should have space left', () => {
  expect(hasSpaceLeft(3, 4)).toBeTruthy();
});

test('should have space right', () => {
  expect(hasSpaceRight(3, 4, 7)).toBeTruthy();
});

test('should have correct count of matching words in grid', () => {
  expect(getCountOfMatchingWordInGrid(XMASGrid, 'XMAS')).toEqual(18)
})
