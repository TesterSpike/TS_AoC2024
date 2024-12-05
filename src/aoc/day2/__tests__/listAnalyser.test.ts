import {areDeltasWithinThreshold, getCountOfSafeLists, isListConsistent} from "../util/listAnalyser";
const safeDecrement = [7, 6, 4, 2, 1]; //Safe because the levels are all decreasing by 1 or 2.
const unsafeDecrement = [9, 7, 6, 2, 1]; //Unsafe because 6 2 is a decrease of 4.
const unSafeIncrement = [1, 2, 7, 8, 9]; //Unsafe because 2 7 is an increase of 5.
const safeIncrement = [1, 3, 6, 7, 9]; //Safe because the levels are all increasing by 1, 2, or 3.
const unsafeMismatch = [1, 3, 2, 4, 5]; //Unsafe because 1 3 is increasing but 3 2 is decreasing.
const unsafeEqual = [8, 6, 4, 4, 1] //Unsafe because 4 4 is neither an increase nor a decrease.

const testList = [safeDecrement, unsafeDecrement, unSafeIncrement, safeIncrement, unsafeMismatch, unsafeEqual];



test.each([
    ['Incrementing 1', unSafeIncrement, true],
    ['Incrementing 2', safeIncrement, true],
    ['Decrementing 1', safeDecrement, true],
    ['Decrementing 2', unsafeDecrement, true],
    ['Same numbers', unsafeEqual, false],
    ['Mismatch', unsafeMismatch, false]])
(`consistent: %s`, (_, list, expected) => {
    expect(isListConsistent(list)).toBe(expected);
});

test.each([
    ['within threshold decrement', safeDecrement, true],
    ['within threshold increment', safeIncrement, true],
    ['same as higher threshold', safeIncrement, true],
    ['higher than threshold', unsafeDecrement, false],
    ['same as lower threshold', unsafeEqual, false]])
('deltas: %s', (_, list, expected) => {
    const threshold: ThresholdType = {min: 0, max: 3};
    expect(areDeltasWithinThreshold(list, threshold)).toBe(expected);
})

test('safe lists should be 2', async () => {
    const threshold: ThresholdType = {min: 0, max: 3};
    expect(getCountOfSafeLists(testList, threshold)).toEqual(2)
});


