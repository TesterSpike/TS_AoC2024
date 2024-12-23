export const getCountOfMatchingWordInGrid = (grid: string[][], matchingWord: string) => {
  let count = 0;
  grid.forEach((gridRow, row) => {
    gridRow.forEach((element, col) => {
      if (element === matchingWord.charAt(0)) {
        count += getCountFromElementLocation(grid, row, col, matchingWord);
      }
    });
  });
  return count;
}

export const getCountFromElementLocation = (grid: string[][], row: number, col: number, matchingWord: string) => {
  let count = 0;

  if (isMatchingWordDown(grid, row, col, matchingWord)) count++;
  if (isMatchingWordUp(grid, row, col, matchingWord)) count++;
  if (isMatchingWordRight(grid, row, col, matchingWord)) count++;
  if (isMatchingWordLeft(grid, row, col, matchingWord)) count++;
  if (isMatchingWordDiagonalLeftUp(grid, row, col, matchingWord)) count++;
  if (isMatchingWordDiagonalLeftDown(grid, row, col, matchingWord)) count++;
  if (isMatchingWordDiagonalRightUp(grid, row, col, matchingWord)) count++;
  if (isMatchingWordDiagonalRightDown(grid, row, col, matchingWord)) count++;

  return count;
}

export const isMatchingWordLeft = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceLeft(col, matcher.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row][col - i]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordRight = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceRight(col, matcher.length, grid[row].length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row][col + i]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordUp = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceUp(row, matcher.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row - i][col]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordDown = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceDown(row, matcher.length, grid.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row + i][col]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordDiagonalLeftUp = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceUp(row, matcher.length) && hasSpaceLeft(col, matcher.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row - i][col - i]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordDiagonalLeftDown = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceLeft(col, matcher.length) && hasSpaceDown(row, matcher.length, grid.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row + i][col - i]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordDiagonalRightUp = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceRight(col, matcher.length, grid[row].length) && hasSpaceUp(row, matcher.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row - i][col + i]);
    }
    return matcher === word;
  }
  return false;
}

export const isMatchingWordDiagonalRightDown = (grid: string[][], row: number, col: number, matcher: string) => {
  if (hasSpaceRight(col, matcher.length, grid[0].length) && hasSpaceDown(row, matcher.length, grid.length)) {
    let word = ''
    for (let i = 0; i < matcher.length; i++) {
      word = word.concat(grid[row + i][col + i]);
    }
    return matcher === word;
  }
  return false;
}

export const hasSpaceDown = (row: number, wordLength: number, maxRow: number) => {
  return row + wordLength <= maxRow;
}

export const hasSpaceUp = (row: number, wordLength: number) => {
  return row + 1 >= wordLength;
}

export const hasSpaceRight = (col: number, wordLength: number, maxCol: number) => {
  return col + wordLength <= maxCol;
}

export const hasSpaceLeft = (col: number, wordLength: number) => {
  return col + 1 >= wordLength;
}