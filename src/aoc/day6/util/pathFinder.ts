import {getTextLinesFromFileName} from '../../common/util/fileHandler';
import {GridPoint} from '../types/gridPoint';
import {Direction} from '../types/direction';

export const getMapGridFromFile = (fileName: string) => {
  const mapLines = getTextLinesFromFileName(fileName);
  const mapGrid: string[][] = [];
  mapLines.forEach(line => {
    mapGrid.push(line.split(''));
  })
  return mapGrid
}

export const getStartingLocationOnGrid = (map: string[][], startMarker: string) => {
  let start = {x: -1, y: -1};
  map.forEach((line, i) => {
    if (line.includes(startMarker)) start = {x: i, y: line.indexOf(startMarker)};
  });
  return start;
}

export const getNextLocation = (currentLocation: GridPoint, direction: GridPoint) => {
  return {x: currentLocation.x + direction.x, y: currentLocation.y + direction.y}
}

export const isLocationObstacle = (grid: string[][], location: GridPoint) => {
  return grid[location.x][location.y] === '#'
}

export const isLocationExit = (mapGrid: string[][], location: any) => {
  return location.x < 0 || location.y < 0 || location.x + 1 > mapGrid.length || location.y + 1 > mapGrid[0].length;
}

export const changeDirection = (currentDirection: GridPoint) => {
  if (currentDirection === Direction.UP) return Direction.RIGHT;
  if (currentDirection === Direction.RIGHT) return Direction.DOWN;
  if (currentDirection === Direction.DOWN) return Direction.LEFT;
  if (currentDirection === Direction.LEFT) return Direction.UP;
  return currentDirection;
}

export const getPathThroughGrid = (mapGrid: string[][], startingLocation: GridPoint, direction: GridPoint) => {
  let path: GridPoint[] = [];
  path.push(startingLocation);

  let location = startingLocation;
  let isExit = isLocationExit(mapGrid, location);
  while (!isExit) {
    let tempLocation = getNextLocation(location, direction);
    if (isLocationExit(mapGrid, tempLocation)) {
      isExit = true;
    } else if (isLocationObstacle(mapGrid, tempLocation)) {
      direction = changeDirection(direction);
    } else {
      location = tempLocation;
      path.push(location);
    }
  }
  return path;
}

export const getDistinctPathLocations = (path: GridPoint[]) => {
  let distinctStringLocations: string[] = [];
  path.map(loc => JSON.stringify(loc)).forEach(loc => {
    if (!distinctStringLocations.includes(loc)) distinctStringLocations.push(loc)
  })
  return distinctStringLocations.map(loc => JSON.parse(loc) as GridPoint);
}