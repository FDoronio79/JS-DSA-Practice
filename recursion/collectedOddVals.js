function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

function collectOddVals(nums) {
    let newArr = [];

    if(nums.length === 0) {
        return newArr;
    }
    if(nums[0] % 2 !== 0) {
        newArr.push(nums[0]);
    }
    newArr = newArr.concat(collectOddVals(nums.slice(1)));
    return newArr
}
console.log(collectOddValues([1, 2, 3, 4, 5]))
console.log(collectOddVals([1, 2, 3, 4, 5, 7]))