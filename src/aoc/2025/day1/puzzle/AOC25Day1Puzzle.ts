import {getTextLinesFromFileName} from '../../../common/util/fileHandler';

type Delta = { zero: number, current: number, threshold: number }

export class AOC25Day1Puzzle {
  private result: Delta = {zero: 0, current: 0, threshold: 0};

  public getZeroesFromInput(filename: string, startingNumber = 50) {
    this.result.current = startingNumber;
    const lines = getTextLinesFromFileName(filename);
    let count = 0;

    lines.forEach(line => {
      if (line !== '') {
        this.result = this.getZeroCountFromLine(line, this.result.current, 0);
        count += this.result.zero
      }
    });

    return count;
  }

  public getThresholdsFromInput(filename: string, startingNumber = 50) {
    this.result.current = startingNumber;
    const lines = getTextLinesFromFileName(filename);
    let count = 0;
    let threshold = 0;

    lines.forEach(line => {
      if (line !== '') {
        this.result = this.getZeroCountFromLine(line, this.result.current, threshold);
        count += this.result.zero
        threshold += this.result.threshold;
      }
    });

    return count + this.result.threshold;
  }

  getZeroCountFromLine(line: string, currentNumber: number, currentThreshold: number) {
    return this.processDelta(this.getDeltaFromLine(line), currentNumber, currentThreshold)
  }

  getDeltaFromLine(line: string): number {
    return Number.parseInt(line.replaceAll('L', '-').replaceAll('R', ''));
  }

  processDelta(delta: number, currentNumber: number, currentThreshold: number): Delta {
    let zero = 0;
    const deltaRem = delta % 100;
    const deltaInt = Math.abs((delta - deltaRem)) / 100;
    let threshold = currentThreshold + deltaInt;
    let current = currentNumber + deltaRem
    if (current < 0) {
      current += 100;
      threshold++;
    }
    if (current > 99) {
      current -= 100;
      threshold++
    }

    if (current === 0) {
      zero = 1;
    }

    return {zero, current, threshold};
  }
}
