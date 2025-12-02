import {
  getCountOfMiddlePageNumbers,
  getListOfValidPages,
  getManualDetails
} from '../util/manualReader';

export class Day5puzzle1 {
  public getCountOfValidPages(fileName: string) {
    return getCountOfMiddlePageNumbers(getListOfValidPages(getManualDetails(fileName)));
  }
}