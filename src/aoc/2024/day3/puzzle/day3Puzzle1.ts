import {getStringFromFileName} from '../../common/util/fileHandler';
import {calculateTotalFromPhrases, getValidPhraseFromString} from '../util/mulAnalyser';

export class Day3Puzzle1 {
  public getSumOfValidMul(filename: string, matcher: RegExp) {
    const text = getStringFromFileName(filename);
    return calculateTotalFromPhrases(getValidPhraseFromString(text, matcher));
  }

}