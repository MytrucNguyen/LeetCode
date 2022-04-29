/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    index = []
    if(haystack.includes(needle)){
        index = haystack.indexOf(needle)
        return index
    }
    else if (!haystack.includes(needle))
        return index = -1
};
// console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));