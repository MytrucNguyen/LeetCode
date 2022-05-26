/**
 * It takes an array of sentences and 
 * returns the number of words in the sentence with the most words.
 */
const mostWordsFound = (sentences) => {
    let max = 0;
    for(let i = 0; i < sentences.length; i++){
        let word = sentences[i].split(" ")
        if(max < word.length){
            max = word.length
        }
    }
    return max
}

console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))