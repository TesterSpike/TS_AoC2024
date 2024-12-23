import {getLetterGridFromFileText, getTextLinesFromFileName} from '../../common/util/fileHandler';
import {getCountOfMatchingWordInGrid} from '../util/gridWordAnalyser';

export class Day4puzzle1 {
  public getCountOfMatchWordInGrid(fileName: string, matchingWord: string) {
    const grid = getLetterGridFromFileText(getTextLinesFromFileName(fileName));
    return getCountOfMatchingWordInGrid(grid, matchingWord);
  }
}