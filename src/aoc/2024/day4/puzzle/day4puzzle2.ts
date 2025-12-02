import {getLetterGridFromFileText, getTextLinesFromFileName} from '../../../common/util/fileHandler';
import {getCountOfCrossedMatchingWordInGrid} from '../util/gridCrossAnalyser';

export class Day4puzzle2 {
  public getCountOfCrossedMatchWordInGrid(fileName: string, matchingWord: string) {
    const grid = getLetterGridFromFileText(getTextLinesFromFileName(fileName));
    return getCountOfCrossedMatchingWordInGrid(grid, matchingWord);
  }
}
