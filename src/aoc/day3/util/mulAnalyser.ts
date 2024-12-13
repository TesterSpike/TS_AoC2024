export const getValidPhraseFromString = (text: string, matchingPhrase: RegExp) => {
  return text.match(matchingPhrase);
}

export const getMultiplyFromPhrase = (phrase: string) => {
  return Number.parseInt(phrase.substring(phrase.indexOf('(') + 1, phrase.indexOf(','))) * Number.parseInt(phrase.substring(phrase.indexOf(',') + 1, phrase.indexOf(')')));
}

export const calculateTotalFromPhrases = (phrases: string[]) => {
  let sumTotal = 0;
  phrases.forEach(phrase => {
    sumTotal += getMultiplyFromPhrase(phrase);
  });
  return sumTotal;
}

export const calculateTotalFromEnabledPhrases = (phrases: string[]) => {
  let enabled = true;
  let sumTotal = 0;
  phrases.forEach(phrase => {
    if(phrase === 'do()') {
      enabled = true;
    }
    if (phrase === 'don\'t()') {
      enabled = false;
    }
    if (enabled && phrase.includes('mul')) {
      sumTotal += getMultiplyFromPhrase(phrase);
    }
  });

  return sumTotal;
}