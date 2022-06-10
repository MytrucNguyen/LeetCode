/**
 * It sorts the array, removes duplicates,
 * and then iterates through the array to find the longest consecutive sequence.

 */
const longestConsecutive = (nums) => {
    /* Checking if the array is empty. If it is, it returns 0. */
    if (nums.length === 0) return 0
    
    /* It sorts the array and removes duplicates */
    let unique = [...new Set(nums.sort(function(a,b){return a-b}))];

    var startOfRange = 0
    var endOfRange = 0

    var min = 0
    var max = 0

    for (var i = 0; i < unique.length; i++) {
        startOfRange = unique[i];
        endOfRange = startOfRange;
        while (unique[i + 1] - unique[i] == 1) {
            endOfRange = unique[i + 1]; 
            i++;
        }
        if(endOfRange-startOfRange > max) {
            max = endOfRange-startOfRange
        }
        else {
            min = endOfRange-startOfRange
        }
    }
    return (Math.max(min, max)+1);
}

console.log(longestConsecutive([]))
console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))
