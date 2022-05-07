/**
 * @param {number[]} nums
 * @return {number}
 */

/* Find the single number in an array. */

 var singleNumber = function(nums) {

    if (nums.length===1) {
        return nums[0]
    }

    let result = 0;

    nums.forEach(element => {
        result = result ^ element
    });

    return result;

 };
console.log(singleNumber([1]))
console.log(singleNumber([2,2,1]))
// Better way
var singleNumber = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let newMap = [...map.entries()].sort((a, b) => a[1] - b[1]);
    return newMap[0][0];
};
console.log(singleNumber([1]))
console.log(singleNumber([2,2,1]))