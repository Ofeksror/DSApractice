function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // count how many sequences of 0,0,0 there are, and subtract that number from n.

    if (n == 0) return true;

    let count = 0;

    // Check first place
    if (flowerbed.length == 1
        && flowerbed[0] == 0)
        return (n == 1);
    
    if (flowerbed.length >= 1
        && flowerbed[0] == 0
        &&  flowerbed[1] == 0)
    {
        flowerbed[0] = 1;
        count++;
    }

    for (let i = 1; i < flowerbed.length - 2; i++) {
        if (flowerbed[i] == 0
            && flowerbed[i+1] == 0
            && flowerbed[i+2] == 0)
        {
            flowerbed[i+1] = 1;
            count++;
            i++;

            if (n == count) return true;
        }
    }

    // Check last place
    if (flowerbed.length >= 2
        && flowerbed[flowerbed.length - 2] == 0
        && flowerbed[flowerbed.length - 1] == 0)
        count++;

    return (n <= count);
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,0,1], 2)); // true
console.log(canPlaceFlowers([1,0,0,0,0,0,0,1], 3)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3)) // true
console.log(canPlaceFlowers([0,0,1,0,1], 1)) // true