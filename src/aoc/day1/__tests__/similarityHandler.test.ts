import {getSimilarityScore, getSimilarityScoreForLists} from "../util/similarityHandler";

const list1a = [3, 4, 2, 1, 3, 3];
const list2 = [4, 3, 5, 3, 9, 3];

test.each([[1, 0, 0], [1, 1, 1], [2, 3, 6]])('Similarity score for a number is correct', (a: number, b: number, expected: number) => {
    expect(getSimilarityScore(a, b)).toEqual(expected);
});

test('Similarity score for lists is correct', () => {
    expect(getSimilarityScoreForLists(list1a, list2)).toEqual(31);
});