import * as fs from "node:fs";

export const getTextListsFromFileName = (fileName: string) => {
    return getStringFromFileName(fileName).split('\r\n');
}

export const getStringFromFileName = (fileName: string) => {
    return fs.readFileSync(fileName, 'utf8');
}

export const getNumberListsFromFileText = (fileText: string[]) => {
    const lists: number[][] = [];
    fileText.forEach((line) => {
        let numbers: number[] = [];
        line.split(' ').forEach(item => {
            numbers.push(Number.parseInt(item, 10));
        });
        lists.push(numbers);
    });
    return lists;
}