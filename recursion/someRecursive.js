// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

function isOdd(val) {
    return val % 2 !== 0
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, isOdd){
    if (arr.length === 0) return false;
    if (isOdd(arr[0])) return true;
    return someRecursive(arr.slice(1), isOdd)
}

console.log(someRecursive([1, 2, 3, 4], isOdd))