import {getStringFromFileName} from '../../../common/util/fileHandler';
import {calculateTotalFromEnabledPhrases, getValidPhraseFromString} from '../util/mulAnalyser';

export class Day3Puzzle2 {
  public getSumOfValidEnabledMul(filename: string, matcher: RegExp) {
    const text = getStringFromFileName(filename);
    return calculateTotalFromEnabledPhrases(getValidPhraseFromString(text, matcher));
  }
}
