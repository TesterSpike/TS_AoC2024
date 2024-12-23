import {GridPoint} from './gridPoint';

export const Direction: { LEFT: GridPoint, RIGHT: GridPoint, UP: GridPoint, DOWN: GridPoint } = {
  LEFT: {x: 0, y: -1},
  RIGHT: {x: 0, y: 1},
  UP: {x: -1, y: 0},
  DOWN: {x: 1, y: 0}
}