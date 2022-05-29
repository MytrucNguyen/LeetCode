/**
 * For each number in the array, 
 * count how many numbers in the array are smaller than it.
*/
const smallerNumbersThanCurrent = nums => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            /* Comparing the current number to the next number in the array. */
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

// In method function 
const smallerNumbersThanCurrent = nums => {
    /* Creating a new array and sorting it. */
    const newArr = nums.slice().sort((a,b) => a-b);
    
    /* Mapping the index of the current element in the array. */
    return nums.map( el => newArr.indexOf(el))
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));