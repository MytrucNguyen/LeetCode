/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* A function that takes an array of numbers and 
returns true if there are duplicates in the array. */
var containsDuplicate = function (nums) {
    /* Sorts the array in ascending order. */
    nums.sort()
    /* Checking if the current number is equal to the previous number. 
    If it is, then it returns true. */
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true
        }
    }
    return false
};

// Better Runtime
var containsDuplicate = function (nums) {
    let map = new Map();

    /* Checking if the map has the number. 
    If it does, then it returns true. 
    If it doesn't, then it sets the number to true. */
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        }
        map.set(nums[i], true);
    }

    return false;
};

console.log(containsDuplicate([3, 1]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
