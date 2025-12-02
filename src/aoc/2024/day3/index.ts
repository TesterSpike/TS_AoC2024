import {Day3Puzzle1} from './puzzle/day3Puzzle1';
import {Day3Puzzle2} from './puzzle/day3Puzzle2';
import {validEnabledPhrase, validPhrase} from './util/matchers';

console.log(`Puzzle 1: ${new Day3Puzzle1().getSumOfValidMul('./resources/Day3_Data.txt', validPhrase)}   `);
console.log(`Puzzle 2: ${new Day3Puzzle2().getSumOfValidEnabledMul('./resources/Day3_Data.txt', validEnabledPhrase)}   `);
