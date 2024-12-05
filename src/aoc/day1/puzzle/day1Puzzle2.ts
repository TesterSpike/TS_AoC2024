import {getListsFromText} from "../util/listHandler";
import {getSimilarityScoreForLists} from "../util/similarityHandler";
import {getTextListsFromFileName} from "../../common/util/fileHandler";

export class Day1Puzzle2 {
    public getSimilarityScore(file: string): number {
        const fileText = getTextListsFromFileName(file);
        const list1:number[] = [];
        const list2:number[] = [];


        getListsFromText(fileText, list1, list2);
        return getSimilarityScoreForLists(list1, list2);
    }

}