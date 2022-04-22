var searchInsert = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i;
        }
        if(nums[i] > target){
            return i;
        }
    }
    return (nums.length)
};

// binary 
// let left = 0, right = nums.length
// while(left < right) {
//     const mid = left + Math.floor((right - left) / 2)
//     if(nums[mid]===target) {
//        return mid
//     } else if(nums[mid] > target){
//         right = mid
//     } else {
//         left = mid + 1
//     }
// }
// return left