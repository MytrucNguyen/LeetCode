/**
 * We know that the sum of the numbers from 1 to n is n(n+1)/2. 
 * So, we can subtract the sum of the numbers in the array 
 * from the sum of the numbers from 1 to n

 */
const missingNumber = (nums) => {
    /* Calculating the sum of the numbers from 1 to n. */
    let expectedSum = nums.length*(nums.length + 1)/2

    /* Summing all the numbers in the array. */
    let sum = nums.reduce((a, b) => a + b, 0)
    
    return expectedSum - sum
}

console.log(missingNumber([1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))