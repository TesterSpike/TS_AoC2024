import {
  changeDirection, getDistinctPathLocations,
  getMapGridFromFile,
  getNextLocation, getPathThroughGrid,
  getStartingLocationOnGrid, isLocationExit,
  isLocationObstacle
} from '../util/pathFinder';
import {Direction} from '../types/direction';
import {GridPoint} from '../types/gridPoint';

const mapGrid = [
  ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '#', '.', '.', '^', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
]

const fullPath: GridPoint[] = [
  {
    "x": 6,
    "y": 4
  },
  {
    "x": 5,
    "y": 4
  },
  {
    "x": 4,
    "y": 4
  },
  {
    "x": 3,
    "y": 4
  },
  {
    "x": 2,
    "y": 4
  },
  {
    "x": 1,
    "y": 4
  },
  {
    "x": 1,
    "y": 5
  },
  {
    "x": 1,
    "y": 6
  },
  {
    "x": 1,
    "y": 7
  },
  {
    "x": 1,
    "y": 8
  },
  {
    "x": 2,
    "y": 8
  },
  {
    "x": 3,
    "y": 8
  },
  {
    "x": 4,
    "y": 8
  },
  {
    "x": 5,
    "y": 8
  },
  {
    "x": 6,
    "y": 8
  },
  {
    "x": 6,
    "y": 7
  },
  {
    "x": 6,
    "y": 6
  },
  {
    "x": 6,
    "y": 5
  },
  {
    "x": 6,
    "y": 4
  },
  {
    "x": 6,
    "y": 3
  },
  {
    "x": 6,
    "y": 2
  },
  {
    "x": 5,
    "y": 2
  },
  {
    "x": 4,
    "y": 2
  },
  {
    "x": 4,
    "y": 3
  },
  {
    "x": 4,
    "y": 4
  },
  {
    "x": 4,
    "y": 5
  },
  {
    "x": 4,
    "y": 6
  },
  {
    "x": 5,
    "y": 6
  },
  {
    "x": 6,
    "y": 6
  },
  {
    "x": 7,
    "y": 6
  },
  {
    "x": 8,
    "y": 6
  },
  {
    "x": 8,
    "y": 5
  },
  {
    "x": 8,
    "y": 4
  },
  {
    "x": 8,
    "y": 3
  },
  {
    "x": 8,
    "y": 2
  },
  {
    "x": 8,
    "y": 1
  },
  {
    "x": 7,
    "y": 1
  },
  {
    "x": 7,
    "y": 2
  },
  {
    "x": 7,
    "y": 3
  },
  {
    "x": 7,
    "y": 4
  },
  {
    "x": 7,
    "y": 5
  },
  {
    "x": 7,
    "y": 6
  },
  {
    "x": 7,
    "y": 7
  },
  {
    "x": 8,
    "y": 7
  },
  {
    "x": 9,
    "y": 7
  }
];

test('should get map grid', () => {
  expect(getMapGridFromFile('./src/aoc/day6/resources/day6_data_test.txt')).toEqual(mapGrid);
});

test('should find starting location', () => {
  expect(getStartingLocationOnGrid(mapGrid, '^')).toEqual({x: 6, y: 4});
});

test.each([
  ['[6, 4] up -> [5, 4]', {x: 6, y: 4}, Direction.UP, {x: 5, y: 4}],
  ['[6, 4] down -> [7, 4]', {x: 6, y: 4}, Direction.DOWN, {x: 7, y: 4}],
  ['[6, 4] left -> [6, 3]', {x: 6, y: 4}, Direction.LEFT, {x: 6, y: 3}],
  ['[6, 4] right -> [6, 5]', {x: 6, y: 4}, Direction.RIGHT, {x: 6, y: 5}]
])
('should give next location: %s', (_, currentLocation, direction, expected) => {
  expect(getNextLocation(currentLocation, direction)).toEqual(expected);
});

test.each([
  ['[5, 4] -> . should not be obstacle', {x: 5, y: 4}, false],
  ['[6, 4] -> ^ should not be obstacle', {x: 6, y: 4}, false],
  ['[0, 4] -> # should be an obstacle', {x: 0, y: 4}, true]
])
('%s', (_, location, expected) => {
  expect(isLocationObstacle(mapGrid, location)).toEqual(expected)
});

// is location exit
test.each([
  ['[-1, 4] should be exit', {x: -1, y: 4}, true],
  ['[11, 4] should be exit', {x: 10, y: 4}, true],
  ['[4, -1] should be exit', {x: 4, y: -1}, true],
  ['[4, 11] should be exit', {x: 4, y: 10}, true],
  ['[0, 0] should not be exit', {x: 0, y: 0}, false]
])
('%s', (_, location, expected) => {
  expect(isLocationExit(mapGrid, location)).toEqual(expected)
});

test.each([
  ['Up should go Right', Direction.UP, Direction.RIGHT],
  ['Right should go Down', Direction.RIGHT, Direction.DOWN],
  ['Down should go Left', Direction.DOWN, Direction.LEFT],
  ['Left should go Up', Direction.LEFT, Direction.UP],
])('%s', (_, direction, expected) => {
  expect(changeDirection(direction)).toEqual(expected);
})

test('should get full path of guard', () => {
  expect(getPathThroughGrid(mapGrid, getStartingLocationOnGrid(mapGrid, '^'), Direction.UP)).toEqual(fullPath);
});

test('path [{1, 1}, {1, 1}] should have 1 distinct location', () => {
  const path: GridPoint[] = [{x: 1, y: 1}, {x: 1, y: 1}];
  const expected: GridPoint[] = [{x: 1, y: 1}];
  expect(getDistinctPathLocations(path)).toEqual(expected);
});