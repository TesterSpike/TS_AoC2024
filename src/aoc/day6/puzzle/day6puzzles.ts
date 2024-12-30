import {
  getDistinctPathLocations,
  getMapGridFromFile,
  getPathThroughGrid,
  getStartingLocationOnGrid
} from '../util/pathFinder';
import {Direction} from '../types/direction';

export class Day6puzzles {
  public getCountOfDistinctLocations(fileName: string) {
    const mapGrid = getMapGridFromFile(fileName);
    const startingPosition = getStartingLocationOnGrid(mapGrid, '^');
    const fullPath = getPathThroughGrid(mapGrid, startingPosition, Direction.UP);
    const listOfDistinctLocation = getDistinctPathLocations(fullPath);
    return listOfDistinctLocation.length;
  }

  public getCountOfSomethingElse(fileName: string) {
    return 0;
  }
}