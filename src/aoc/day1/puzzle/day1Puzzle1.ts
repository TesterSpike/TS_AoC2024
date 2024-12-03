import {getTextFromFile} from '../util/fileHandler'
import {getSortedListPairs} from "../util/listHandler";
import {getDistance} from "../util/distanceHandler";

export class Day1Puzzle1 {
    public getDistanceFromFile(file: string) {
        return getDistance(getSortedListPairs(getTextFromFile(file)));
    }
}
