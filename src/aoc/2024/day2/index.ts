import {Day2puzzle1} from "./puzzle/day2puzzle1";
import {Day2puzzle2} from "./puzzle/day2puzzle2";

console.log(`Puzzle 1: ${new Day2puzzle1().getCountOfSafeLists('./resources/Day2_Data.txt')}  `);
console.log(`Puzzle 2: ${new Day2puzzle2().getCountOfSafeLists('./resources/Day2_Data.txt')}  `);