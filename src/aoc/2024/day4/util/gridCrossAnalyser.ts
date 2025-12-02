export const hasSpace = (row: number, rowCount: number, col: number, colCount: number) => {
  return row > 0 && row + 1 < rowCount && col > 0 && col + 1 < colCount;
}

export const getCountOfCrossedMatchingWordInGrid = (grid: string[][], matchingWord: string) => {
  let count = 0;
  grid.forEach((gridRow, row) => {
    gridRow.forEach((element, col) => {
      if (hasSpace(row, grid.length, col, gridRow.length) && element === matchingWord.charAt(1)) {
        if (isCrossedWord(grid, row, col, matchingWord)) count++;
      }
    });
  });
  return count;
}

export const isCrossedWord = (grid: string[][], row: number, col: number, word: string) => {
  const words = getWords(grid, row, col);

  return (words.word00 === word && words.word02 === word) ||
      (words.word00 === word && words.word20 === word) ||
      (words.word02 === word && words.word22 === word) ||
      (words.word20 === word && words.word22 === word);
}

export const getWords = (grid: string[][], row: number, col: number) => {
  const up = row - 1;
  const down = row + 1;
  const left = col - 1;
  const right = col + 1;
  const word00 = getWord(grid, {row: up, col: left}, {row, col}, {row: down, col: right});
  const word02 = getWord(grid, {row: up, col: right}, {row, col}, {row: down, col: left});
  const word20 = getWord(grid, {row: down, col: left}, {row, col}, {row: up, col: right});
  const word22 = getWord(grid, {row: down, col: right}, {row, col}, {row: up, col: left});
  return {word00, word02, word20, word22}
}

export const getWord = (grid: string[][], startPoint: point, midPoint: point, endPoint: point) => {
  return `${grid[startPoint.row][startPoint.col]}${grid[midPoint.row][midPoint.col]}${grid[endPoint.row][endPoint.col]}`
}
