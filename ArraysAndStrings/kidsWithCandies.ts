function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const findMax = (arr: number[]) => {
        if (arr.length == 0)
            throw Error("Array is empty");

        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
        }

        return max;
    }

    const MAX_CANDIES = findMax(candies);

    let result: boolean[] = [];
    candies.map((count) => {
        result.push((count + extraCandies >= MAX_CANDIES));
    });

    return result;
};