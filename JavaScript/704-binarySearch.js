/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end){
        let midpoint = Math.floor((start + end) / 2)
        
        if(nums[midpoint] === target) {
            return midpoint;
        }
        else if (nums[midpoint] < target){
            start++
        }
        else {
            end--
        }
    }
    return -1
};