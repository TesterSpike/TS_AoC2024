export const sortList = (list: number[]) => {
    return list.sort((a, b) => a - b);
}

export const getListsFromText = (textList: string[], list1: number[], list2: number[]) => {
    textList.forEach(item => {
        list1.push(Number.parseInt(item.slice(0, item.indexOf(' '))));
        list2.push(Number.parseInt(item.slice(item.lastIndexOf(' '))));
    })
}

export const getSortedListPairs = (textList: string[]): {a:number, b:number}[] => {
    let list1:number[] = [], sortedList1:number[];
    let list2:number[] = [], sortedList2:number[];
    const listPair = [];
    getListsFromText(textList, list1, list2);
    sortedList1 = sortList(list1);
    sortedList2 = sortList(list2);

    for (let i = 0, l = sortedList1.length; i < l; i++) {
        listPair.push({a: sortedList1[i], b:sortedList2[i]});
    }
    return listPair;
}

export const getCountOfMatchingInList = (matcher: number, list: number[]):number => {
    return list.filter(it => {return it === matcher}).length;
}