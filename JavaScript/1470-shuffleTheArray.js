/**
 * We loop through the first half of the array, 
 * and push the current element and the element at the
 * same index in the second half of the array to a new array.
 */
const shuffle = (nums, n) => {
    let res = []
    for(let i = 0; i < n; i++){
        /* Pushing the current element and 
        the element at the same index in the second half of the
        array to a new array. */
        res.push(nums[i], nums[i+n])
    }
    return res
}

console.log(shuffle([2,5,1,3,4,7], 3))