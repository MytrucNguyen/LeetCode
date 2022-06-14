/**
 * We iterate through the string, and at each index, we check if the substring from the beginning of
 * the string to the current index is in the dictionary. If it is, we set the value at the current
 * index to true. We do this for every index in the string. If the value at the last index is true,
 * then we know that the string can be segmented into substrings that are in the dictionary
 */
const wordBreak = (s, wordDict) => {
    let table = new Array(s.length + 1).fill(false);
    table[0] = true;

    for(let i = 0; i < table.length; i++){
        if(table[i] === false) continue;

        for(let j = i+1; j < table.length; j++){
            let word = s.slice(i, j);
            if(wordDict.includes(word)){
                table[j] = true;
            }
        }
    }
    return table[table.length - 1]
}

console.log(wordBreak("leetcode", ["leet","code"]))