/**
 * It takes an array of numbers and 
 * returns a new array that is the concatenation of the original array with itself.
 */

const getConcatenation = (nums) => {
    let ans = nums
    return ans.concat(nums)
}

// Another way
const getConcatenation = (nums) => {
    const len = nums.length

    for(let i = 0; i < len; i++){
        nums[len + i] = nums [i]
    }
    return nums
}

console.log(getConcatenation([1, 2, 1]))