import {getSortedListPairs} from "../util/listHandler";
import {getDistance} from "../util/distanceHandler";
import {getTextListsFromFileName} from "../../common/util/fileHandler";

export class Day1Puzzle1 {
    public getDistanceFromFile(file: string) {
        return getDistance(getSortedListPairs(getTextListsFromFileName(file)));
    }
}
