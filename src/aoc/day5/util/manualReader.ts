import {getTextLinesFromFileName} from '../../common/util/fileHandler';
import {manual} from '../types/manual';

export const getManualDetails = (fileName: string) => {
  const text = getTextLinesFromFileName(fileName);
  let manualText: manual = {rules: [], manual: []};
  text.forEach(line => {
    if (line.includes('|')) {
      manualText.rules.push(line.split('|').map(Number));
    } else if (line !== '' && line.includes(',')) {
      manualText.manual.push(line.split(',').map(Number));
    }
  });
  return manualText;
}

export const isRuleForPage = (rule: number[], page: number[]) => {
  return rule.every(item => page.includes(item));
}

export const getValidRulesForPage = (manualPage: number[], manualRules: number[][]) => {
  const validRules: number[][] = [];
  manualRules.forEach(rule => {
    if (isRuleForPage(rule, manualPage)) validRules.push(rule);
  });
  return validRules;
}

export const isManualPageValid = (manualPage: number[], manualRules: number[][]) => {
  const validRules = getValidRulesForPage(manualPage, manualRules);
  return validRules.every(rule => manualPage.indexOf(rule[0]) < manualPage.indexOf(rule[1]));
}

export const getListOfValidPages = (manualDetails: manual) => {
  let validPages: number[][] = []
  manualDetails.manual.forEach(page => {
    if (isManualPageValid(page, manualDetails.rules)) validPages.push(page);
  });
  return validPages;
}

export const getListOfInvalidPages = (manualDetails: manual) => {
  let invalidPages: number[][] = [];
  manualDetails.manual.forEach(page => {
    if (!isManualPageValid(page, manualDetails.rules)) invalidPages.push(page);
  });
  return invalidPages;
}

export const reorderInvalidPage = (pages: number[], rules: number[][]) => {
  let reorderedPages = pages;
  reorderedPages.sort((x, y) => {
    if (rules.find(rule => rule[0] === x && rule[1] === y)) return -1; //in the correct order
    if (rules.find(rule => rule[1] === x && rule[0] === y)) return 1; //not in the correct order
    return 0; //equal
  });
  return reorderedPages;
}

export const getListOfFixedPages = (pages: number[][], rules: number[][]) => {
  const fixedPage: number[][] = [];
  pages.forEach(page => {
    fixedPage.push(reorderInvalidPage(page, getValidRulesForPage(page, rules)))
  });
  return fixedPage;
}


export const getMiddlePage = (pages: number[]) => {
  return pages[(pages.length - 1) / 2];
}

export const getCountOfMiddlePageNumbers = (pages: number[][]) => {
  let count = 0;
  pages.forEach(page => {
    count += getMiddlePage(page)
  });
  return count;
}