import {getListsFromText} from "../util/listHandler";
import {getSimilarityScoreForLists} from "../util/similarityHandler";
import {getTextLinesFromFileName} from "../../../common/util/fileHandler";

export class Day1Puzzle2 {
    public getSimilarityScore(file: string): number {
        const fileText = getTextLinesFromFileName(file);
        const list1:number[] = [];
        const list2:number[] = [];


        getListsFromText(fileText, list1, list2);
        return getSimilarityScoreForLists(list1, list2);
    }

}
