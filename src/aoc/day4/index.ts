import {Day4puzzle1} from './puzzle/day4puzzle1';
import {Day4puzzle2} from './puzzle/day4puzzle2';

console.log(`Puzzle 1: ${new Day4puzzle1().getCountOfMatchWordInGrid('./resources/Day4_Data.txt', 'XMAS')}   `);
console.log(`Puzzle 2: ${new Day4puzzle2().getCountOfCrossedMatchWordInGrid('./resources/Day4_Data.txt', 'MAS')}   `);
