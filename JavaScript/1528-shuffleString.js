/**
 * We create a new array of the same length as the input string, 
 * fill it with zeros, and then replace each zero with the character 
 * at the index of the index of the character in the input string.
 */
const restoreString = (s, indices) => {
    /* It creates an array of the same length as the input string, 
    and fills it with zeros. */
    let suffledArr = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        suffledArr[i] = s[indices.indexOf(i)];
    }
    return suffledArr.join('');
}

/**
 * We create an empty array, then loop through the indices array, 
 * and for each index, we add the corresponding letter from the string to the empty array.
 */
const restoreString = (s, indices) => {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];; 
    }
    return result.join("");
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));