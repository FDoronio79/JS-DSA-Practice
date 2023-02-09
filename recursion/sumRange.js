const sumRange1 = (num) => {if (num === 1) return 1; return num + sumRange(num-1);}

function sumRange2(num) {
    sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(sumRange1(3))
