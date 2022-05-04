/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=_-]+$/g
    const specialCharacter = /(\s|,|'|\.)/
    
    let splitS = s.split(specialCharacter)
    let arrayOfWords = []

    for(let i = 0; i < splitS.length; i++){
        if(splitS[i].match(regex)){
            arrayOfWords.push(splitS[i])
        }
    }
    
    let lastword = arrayOfWords[arrayOfWords.length-1]
    return lastword.length

};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))