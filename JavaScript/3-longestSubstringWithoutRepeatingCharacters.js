/**
 * We iterate through the string, adding each character to a current string, 
 * checking if the current character is in the current string, 
 * and removing the characters from the beginning of the array up to the current position 
 * if the current character is in the current string. 
 * 
 * We then compare the current longest string with the current string 
 * and return the longest string.
 */
const lengthOfLongestSubstring = (s) => {
    let currentString = [], longestString = 0;

    for(let i=0; i<s.length; i++){
        /* Checking if the current character is in the current string. */
        const currentPosition = currentString.indexOf(s[i])

        // Check if the current character exists in the current string
        if(currentPosition !== -1){
            /* Removing the characters from the beginning of the array up to the current position. */
            currentString.splice(0, currentPosition + 1)
        }

        /* Adding the current character to the current string. */
        currentString.push(s[i])

        /* Comparing the current longest string with the current string 
        and returning the longest string. */
        longestString = Math.max(
            longestString, currentString.length
        )
    }
    return longestString
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))