/**
 * We iterate through the string, checking for palindromes of odd and even lengths, 
 * and return the longest one
 */
const longestPalindrome = (s) => {
    let max = 0;
    let start = 0;
    let end = 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        let left = i;
        let right = i;
        /* We are checking if the characters at the left and right
        indices are the same. 
        If they are, we decrement the left index and increment the right
        index. We keep doing this until the characters are not the same. */
        while (left >= 0 && right < len && s[left] === s[right]) {
            left--;
            right++;
        }
        /* This is the part of the algorithm that keeps track of the longest palindrome. */
        if (right - left - 1 > max) {
            max = right - left - 1;
            start = left + 1;
            end = right - 1;
        }
        left = i;
        right = i + 1;
        /*  We are checking if the characters at the left and right indices are the same. 
        If they are, we decrement the left index and increment the right index. 
        We keep doing this until the characters are not the same. */
        while (left >= 0 && right < len && s[left] === s[right]) {
            left--;
            right++;
        }
        if (right - left - 1 > max) {
            max = right - left - 1;
            start = left + 1;
            end = right - 1;
        }
    }
    return s.substring(start, end + 1);
}

console.log(longestPalindrome('babad'));