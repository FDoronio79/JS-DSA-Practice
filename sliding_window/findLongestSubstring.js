function findLongestSubstring(str) {
    // Initialize a variable "longest" to store the length of the longest unique substring
    let longest = 0;
    // Initialize an object "seen" to store the last index of each character in the input string
    let seen = {};
    // Initialize a variable "start" to keep track of the starting index of the current substring
    let start = 0;

    // Loop through the input string
    for (let i = 0; i < str.length; i++) {
        // Get the current character
        let char = str[i];
        // If the current character has been seen before, update the starting index of the current substring
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // Calculate the length of the current unique substring and update the "longest" variable if necessary
        longest = Math.max(longest, i - start + 1);
        // Store the index of the next appearance of the current character in the "seen" object
        seen[char] = i + 1;
    }
    // Return the length of the longest unique substring
    return longest;
}

console.log(findLongestSubstring('rithmschool'))