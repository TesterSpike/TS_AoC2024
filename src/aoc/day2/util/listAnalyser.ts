export const isListConsistent = (numbers: number[]) => {
    return numbers.every((number, i) => i === 0 || numbers[i - 1] < number) ||
        numbers.every((number, i) => i === 0 || numbers[i - 1] > number);
};

export const areDeltasWithinThreshold = (numbers: number[], threshold: ThresholdType) => {
    return numbers.every((number, i) => i === 0 ||
        Math.abs(numbers[i - 1] - number) > threshold.min && Math.abs(numbers[i - 1] - number) <= threshold.max);
}

export const getCountOfSafeLists = (lists: number[][], threshold: ThresholdType): number => {
    let safeCount = 0;
    lists.forEach((list) => {
        if (list.length > 0 && isListConsistent(list) && areDeltasWithinThreshold(list, threshold)) {
            safeCount++;
        }
    });
    return safeCount;
}
