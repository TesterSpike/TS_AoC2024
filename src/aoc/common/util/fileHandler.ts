import * as fs from "node:fs";

export const getTextLinesFromFileName = (fileName: string) => {
    return getStringFromFileName(fileName).split('\n');
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

export const getLetterGridFromFileText = (fileText: string[])=> {
    const grid: string[][] = []
    fileText.forEach(line => {
        grid.push(line.split(''));
    });
    return grid;
}