import {getTextLinesFromFileName} from '../../common/util/fileHandler';
import {GridPoint} from '../types/gridPoint';

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