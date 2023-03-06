```
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
```

//Example inuputs
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// Takes an array as an input and returns a flattened version of it
function flatten(oldArr) {

    // Declare a new array to store the flattened version
    var newArr = []

    // Loop through the elements in the old array
    for (var i = 0; i < oldArr.length; i++) {

        // Check if the current element is an array
        if (Array.isArray(oldArr[i])) {

            // If it is an array, recursively call the flatten function and concatenate the result to the new array
            newArr = newArr.concat(flatten(oldArr[i]))

        } else {

            // If it is not an array, push the element to the new array
            newArr.push(oldArr[i])

        }
    }

    // Return the flattened array
    return newArr;
}