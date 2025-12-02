import {Day5puzzle1} from './puzzle/day5puzzle1';
import {Day5puzzle2} from './puzzle/day5puzzle2';

console.log(`Puzzle 1: ${new Day5puzzle1().getCountOfValidPages('./resources/day5_data.txt')}   `);
console.log(`Puzzle 2: ${new Day5puzzle2().getCountOfInvalidPages('./resources/day5_data.txt')}   `);
