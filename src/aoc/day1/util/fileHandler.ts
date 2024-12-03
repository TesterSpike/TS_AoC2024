import * as fs from "node:fs";

export const getTextFromFile = (file: string)=> {
    return fs.readFileSync(file, 'utf8').split('\r\n');
}