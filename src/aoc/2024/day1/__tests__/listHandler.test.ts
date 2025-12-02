import {getCountOfMatchingInList, sortList} from "../util/listHandler";

describe('ListHandler', () => {
    test('Should return a sorted array', () => {
        const expectedList = [1, 2, 2, 3, 3];
        const testList = [3, 1, 3, 2, 2];
        expect(sortList(testList)).toEqual(expectedList);
    });

    test.each([
        ['Should find 3 1\'s in list [1, 1, 1]', 1, [1, 1, 1], 3],
        ['Should find 1 3 in list [1, 2, 3]', 3, [1, 2, 3], 1],
        ['should find no 4\'s in list [1, 2, 3]', 4, [1, 2, 3], 0]
    ])
    ('%s', (testname, n: number, list: number[], expected: number) => {
        expect(getCountOfMatchingInList(n, list)).toEqual(expected);
    });
})