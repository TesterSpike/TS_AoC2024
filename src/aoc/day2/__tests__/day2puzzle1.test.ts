import {Day2puzzle1} from "../puzzle/day2puzzle1";

test('should have the correct number of safe reports in file', async () => {
    expect(new Day2puzzle1().getCountOfSafeLists('./src/aoc/day2/resources/Day2_Data_Test.txt')).toBe(2);
});