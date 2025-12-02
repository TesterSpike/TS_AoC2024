import {Day1Puzzle1} from "./puzzle/day1Puzzle1";
import {Day1Puzzle2} from "./puzzle/day1Puzzle2";

const day1Puzzle1 = new Day1Puzzle1()
console.log(`puzzle 1 answer: ${day1Puzzle1.getDistanceFromFile('./resources/Day1_Puzzle_Data.txt')}`);

const day1Puzzle2 = new Day1Puzzle2()
console.log(`puzzle 2 answer: ${day1Puzzle2.getSimilarityScore('./resources/Day1_Puzzle_Data.txt')}`);