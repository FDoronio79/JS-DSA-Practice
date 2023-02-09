`
Suppose we want to write a function that calculates the sum of all numbers from 1
up to (and including) some number n. 
`

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
// let t1 = performance.now();
// addUpTo(100000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo2(n) {
	return n * (n + 1) / 2;
}

console.log(addUpTo(6))
console.log(addUpTo2(6))
