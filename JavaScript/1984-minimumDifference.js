/**
 * We sort the array in ascending order, then we find the minimum difference between the two numbers
 */
const minimumDifference = (nums, k) => {
    /* Sorting the array in ascending order. */
    nums.sort((a, b) => a-b)
    /* Setting the result to the maximum value of a number. */
    let result = nums[nums.length-1] - nums[0]

    for(i = 0; i <= nums.length - k; i++){
    /* Finding the minimum difference between the two numbers. */
        result = Math.min(result, nums[i + k - 1] - nums[i])
    }
    return result
}

// console.log(minimumDifference([90], 1))
console.log(minimumDifference([9,4,1,7], 2))