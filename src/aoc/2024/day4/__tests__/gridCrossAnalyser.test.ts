import {XMASGrid} from '../../../common/resources/commonConstants';
import {
  getCountOfCrossedMatchingWordInGrid,
  getWords,
  getWord,
  isCrossedWord, hasSpace
} from '../util/gridCrossAnalyser';

const validCross00_02 = [['M', '', 'M'], ['', 'A', ''], ['S', '', 'S']];
const validCross00_20 = [['M', '', 'S'], ['', 'A', ''], ['M', '', 'S']];
const validCross02_22 = [['S', '', 'S'], ['', 'A', ''], ['M', '', 'M']];
const validCross20_22 = [['S', '', 'S'], ['', 'A', ''], ['M', '', 'M']];
const testGrid = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]

const matchingWord = 'MAS';

const up = 0, down = 2, left = 0, right = 2;
test('get word', () => {
  expect(getWord(testGrid, {row: up, col: left}, {row: 1, col: 1}, {
    row: down,
    col: right
  })).toEqual('AEI');
});

test.each([['has no space', testGrid.length, testGrid[0].length, 0, 0, false]])
('%s', (_, rowCount, colCount, row, col, expected) => {
  expect(hasSpace(row, rowCount, col, colCount)).toEqual(expected);
})

test('get words at element location', () => {
  const words = getWords(testGrid, 1, 1);
  expect(words.word00).toEqual('AEI');
  expect(words.word02).toEqual('CEG');
  expect(words.word20).toEqual('GEC');
  expect(words.word22).toEqual('IEA');
});

test.each([
  ['a crossed word at XmasGrid 7, 3', XMASGrid, 7, 3, true],
  ['a crossed word at validCross00_02 1, 1', validCross00_02, 1, 1, true],
  ['a crossed word at validCross00_20 1, 1', validCross00_20, 1, 1, true],
  ['a crossed word at validCross02_22 1, 1', validCross02_22, 1, 1, true],
  ['a crossed word at validCross20_22 1, 1', validCross20_22, 1, 1, true]
])
('should be %s', (_, grid, row, col, outcome) => {
  expect(isCrossedWord(grid, row, col, matchingWord)).toEqual(outcome);
});


test('should have correct count of crossed words in grid', () => {
  expect(getCountOfCrossedMatchingWordInGrid(XMASGrid, 'MAS')).toEqual(9)
});
