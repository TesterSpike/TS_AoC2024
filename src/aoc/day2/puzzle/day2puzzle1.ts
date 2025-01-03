import {getNumberListsFromFileText, getTextLinesFromFileName} from "../../common/util/fileHandler";
import {getCountOfSafeLists } from "../util/listAnalyser";

export class Day2puzzle1 {
    public getCountOfSafeLists(file: string) {
        const threshold: ThresholdType = {
            min: 0,
            max: 3
        }
        const lists = getNumberListsFromFileText(getTextLinesFromFileName(file));
        return getCountOfSafeLists(lists, threshold);
    }
}