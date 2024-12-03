import {getCountOfMatchingInList} from "./listHandler";

export const getSimilarityScoreForLists = (list1: number[], list2: number[])=> {
    let similarityScore: number = 0;
    list1.forEach((element: number) => {
        similarityScore += getSimilarityScore(getCountOfMatchingInList(element, list2), element);
    });
    return similarityScore;
}

export const getSimilarityScore= (a: number, b: number): number => {
    return a * b;
}