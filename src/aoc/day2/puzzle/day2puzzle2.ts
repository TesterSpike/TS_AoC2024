import {getListsFromFileText, getTextListsFromFileName} from "../../common/util/fileHandler";
import {getCountOfSafeListsWithDampener} from "../util/listAnalyser";

export class Day2puzzle2 {
    public getCountOfSafeLists(file: string) {
        const threshold: ThresholdType = {
            min: 0,
            max: 3
        }
        const lists = getListsFromFileText(getTextListsFromFileName(file));
        return getCountOfSafeListsWithDampener(lists, threshold);
    }
}

