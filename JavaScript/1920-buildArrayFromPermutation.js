/**
 * For each index in the array, 
 * the value at that index is the index of the value that should be at that index.
 */
const buildArray = (nums) => {
    let ans = new Array(nums.length);
    /* Creating a new array, ans, 
    and assigning the value of nums[nums[i]] to each index of ans. 
    */
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
};

console.log(buildArray([0,2,1,5,3,4]))