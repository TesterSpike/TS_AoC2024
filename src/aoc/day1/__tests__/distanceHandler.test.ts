import {getDistance, getDistanceBetweenPairs} from "../util/distanceHandler";

describe('distanceHandler', () => {
    test.each([
        ['should have distance 1 for 1, 2', 1, 2, 1],
        ['should have distance 0 for 2, 2', 2, 2, 0],
        ['should have distance 3 for 5, 2', 5, 2, 3]])('%s', (testname, a, b, expected) => {
        expect(getDistanceBetweenPairs(a, b)).toEqual(expected);
    });

    test('should sum the list of distances', () => {
        const testList = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 5, b: 2}];
        expect(getDistance(testList)).toEqual(4)
    });
});
