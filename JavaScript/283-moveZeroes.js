/**
 * "If the current element is 0, remove it from the array and add a 0 to the end of the array."
 * 
 * The function starts at the end of the array and works its way to the beginning. 
 * 
 * The first thing the function does is check if the current element is 0. 
 * 
 * If it is, it removes the element from the array and adds a 0 to the end of the array. 
 * 
 * If the current element is not 0, the function moves on to the next element. 
 * 
 * The function continues until it reaches the beginning of the array. 
 * 
 * The function then returns the array.

 */
const moveZeroes = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
    }
    return nums
}

// Better Runtime distribution
const moveZeroes = nums => {
    let i = 0,
        j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            if (i !== j) {
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j++;
        }
        i++;
    }
    return;
};

console.log(moveZeroes([0, 1]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([2, 1]))