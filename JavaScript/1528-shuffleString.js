/**
 * For each index in the indices array, 
 * add the character at that index in the string s to the result string.
 */
const restoreString = (s, indices) => {
    let result = "";
    for (let i = 0; i < indices.length; i++) {
        result += s[indices[i]];
    }
    return result;
}

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));