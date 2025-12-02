import {getSortedListPairs} from "../util/listHandler";
import {getDistance} from "../util/distanceHandler";
import {getTextLinesFromFileName} from "../../../common/util/fileHandler";

export class Day1Puzzle1 {
    public getDistanceFromFile(file: string) {
        return getDistance(getSortedListPairs(getTextLinesFromFileName(file)));
    }
}
