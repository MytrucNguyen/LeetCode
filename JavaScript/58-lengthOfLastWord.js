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

// Better Way
/* Splitting the string into an array of words, then it is checking if the last word is empty, if it
is, it is removing it from the array. Then it is returning the length of the last word. */
var lengthOfLastWord2 = function(s) {
    let a = s.split(' ');
    
    while(a[a.length-1].length===0){
      a.pop();
    }
    
    return a[a.length-1].length;
  };

console.log(lengthOfLastWord2("Hello World"))
console.log(lengthOfLastWord2("   fly me   to   the moon  "))
console.log(lengthOfLastWord2("luffy is still joyboy"))