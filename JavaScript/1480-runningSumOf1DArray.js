/**
 * We loop through the array starting at index 1, 
 * and we add the current value to the previous value,
 * and then we replace the current value with the sum
 */
const runningSum = (nums) => {
    /* 
    Adding the current number to the previous number 
    and storing it in the current index. 
    */
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
}

console.log(runningSum([1,2,3,4]))
// console.log(runningSum([1,1,1,1]))