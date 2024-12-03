export const getDistanceBetweenPairs = (a: number, b: number) => {
    return Math.abs(a - b);
}


export const getDistance = (sortedListPair: { a: number, b: number }[])=> {
    const distances: number[] = [];

    sortedListPair.forEach(item => {
        distances.push(getDistanceBetweenPairs(item.a, item.b));
    });
    return distances.reduce((a, b) => a + b);
}