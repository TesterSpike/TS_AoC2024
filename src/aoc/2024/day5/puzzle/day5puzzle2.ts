import {
  getCountOfMiddlePageNumbers, getListOfFixedPages, getListOfInvalidPages,
  getManualDetails
} from '../util/manualReader';

export class Day5puzzle2 {
  public getCountOfInvalidPages(fileName: string) {
    const manual = getManualDetails(fileName);
    return getCountOfMiddlePageNumbers(getListOfFixedPages(getListOfInvalidPages(manual), manual.rules));
  }
}