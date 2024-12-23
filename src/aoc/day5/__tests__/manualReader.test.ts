import {
  getCountOfMiddlePageNumbers, getListOfFixedPages, getListOfInvalidPages,
  getListOfValidPages,
  getManualDetails, getMiddlePage,
  getValidRulesForPage,
  isManualPageValid,
  isRuleForPage, reorderInvalidPage
} from '../util/manualReader';
import {manual} from '../types/manual';

const testRules = [
  [47, 53],
  [97, 13],
  [97, 61],
  [97, 47],
  [75, 29],
  [61, 13],
  [75, 53],
  [29, 13],
  [97, 29],
  [53, 29],
  [61, 53],
  [97, 53],
  [61, 29],
  [47, 13],
  [75, 47],
  [97, 75],
  [47, 61],
  [75, 61],
  [47, 29],
  [75, 13],
  [53, 13]];

const testPages = [
  [75, 47, 61, 53, 29],
  [97, 61, 53, 29, 13],
  [75, 29, 13],
  [75, 97, 47, 61, 53],
  [61, 13, 29],
  [97, 13, 75, 29, 47]
]

const validPage = [75, 47, 61, 53, 29];
const validRules = [[47, 53], [75, 29], [75, 53], [53, 29], [61, 53], [61, 29], [75, 47], [47, 61], [75, 61], [47, 29]]
const validPageList = [[75, 47, 61, 53, 29], [97, 61, 53, 29, 13], [75, 29, 13]];
const invalidPageList = [[75, 97, 47, 61, 53], [61, 13, 29], [97, 13, 75, 29, 47]]
const fixedList = [[97, 75, 47, 61, 53], [61, 29, 13], [97, 75, 47, 29, 13]]

const testManual: manual = {
  rules: testRules,
  manual: testPages
}
test('should get manual details from file', () => {
  expect(getManualDetails('./src/aoc/day5/resources/day5_data_test.txt')).toEqual(testManual);
});

test.each([
  ['should be rule for page', [47, 29], [75, 47, 61, 53, 29], true],
  ['should not be rule for page', [47, 29], [75, 97, 47, 61, 53], false]
])
('%s', (_, rule, page, expected) => {
  expect(isRuleForPage(rule, page)).toEqual(expected);
});

test('should return valid list of rules for page', () => {
  expect(getValidRulesForPage(validPage, testRules)).toEqual(validRules);
});

test.each([
  ['should be valid manual page', [75, 47, 61, 53, 29], true],
  ['should be invalid manual page', [75, 97, 47, 61, 53], false]
])
('%s', (_, page, expected) => {
  expect(isManualPageValid(page, testRules)).toEqual(expected);
});

test('should get list of valid pages from input', () => {
  expect(getListOfValidPages(testManual)).toEqual(validPageList);
});

test('should get list of invalid pages from input', () => {
  expect(getListOfInvalidPages(testManual)).toEqual(invalidPageList)
});

test.each([
  ['should reorder page [61, 13, 29] to become valid', [75, 97, 47, 61, 53], [97, 75, 47, 61, 53]],
  ['should reorder page [61, 13, 29] to become valid', [61, 13, 29], [61, 29, 13]],
  ['should reorder page [61, 13, 29] to become valid', [97, 13, 75, 29, 47], [97, 75, 47, 29, 13]]
])
('%s', (_, pages, expected) => {
  const validRules = getValidRulesForPage(pages, testRules)
  expect(reorderInvalidPage(pages, validRules)).toEqual(expected);
});

test.each([
  ['should get page 61 from [75, 47, 61, 53, 29]', [75, 47, 61, 53, 29], 61],
  ['should get page 47 from [75, 47, 61]', [61, 13, 29], 13]
])
('%s', (_, pages, expected) => {
  expect(getMiddlePage(pages)).toEqual(expected);
});

test('should get list of fixed pages', () => {
  expect(getListOfFixedPages(invalidPageList, testRules)).toEqual(fixedList);
});

test('should get count of valid middle pages', () => {
  expect(getCountOfMiddlePageNumbers(validPageList)).toEqual(143);
});

test('should get count of invalid middle pages', () => {
  expect(getCountOfMiddlePageNumbers(invalidPageList)).toEqual(123);
});