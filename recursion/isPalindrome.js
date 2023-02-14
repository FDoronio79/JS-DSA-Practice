// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // Check if the string has a length of 1, which means it is a palindrome
    if(str.length === 1) return true;
    
    // Check if the string has a length of 2, which means it is a palindrome if the characters match
    if(str.length === 2) return str[0] === str[1];
    
    // If the first and last characters of the string match, recursively call the function on the substring without the first and last characters
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    
    // If the first and last characters of the string don't match, it is not a palindrome
    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false