/**
 * If the next character in the pattern is a star, 
 * then we can either ignore the star and the character
 * before it, or we can match the character before the star 
 * and then ignore the star and the character before it.
 */

/**
 * If the current character in the string matches the current character in the pattern, 
 * then we recursively check the rest of the string and the rest of the pattern.
 */
const isMatch = (s, p) => {
    return recursiveIsMatch(0, 0, s, p);
}

/**
 * @param i - index of the input string
 * @param j - the index of the pattern
 * @param s - the input string
 * @param p - pattern
 */
const recursiveIsMatch = (i, j, s, p) => {
    const inputStringLength = s.length;
    const patternLength = p.length;

    /* If the pattern is empty, then the string is empty too. */
    if (j == patternLength) {
        return i == inputStringLength;
    }

    // If the current pattern character is followed by a * (is a wildcard)
    if (j + 1 < patternLength && p.charAt(j + 1) == '*') {
        if (recursiveIsMatch(i, j + 2, s, p)) return true;

        // Loop through the remaining characters, so long as they match by character (or .)
        while (
            i < inputStringLength &&
            (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j))
        ) {
            // Check the rest of the string (1 character forward), against the next point in the pattern (after the asterisk)
            if (recursiveIsMatch(++i, j + 2, s, p)) return true;
        }
        // If the current pattern character is not a wildcard, and matches the current string character
    } else if (
        i < inputStringLength &&
        (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j))
    ) {
        // Move onto the next character, and the next character of the pattern
        return recursiveIsMatch(i + 1, j + 1, s, p);
    }

    // String does not match current point in pattern
    return false;
}

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('ab', '.*'));