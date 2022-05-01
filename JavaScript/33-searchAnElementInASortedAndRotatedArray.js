/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end){
        let mid = Math.floor((end + start) / 2);

        if(nums[mid] > nums[end]){
            start = mid + 1;
        } 
        else{
            end = mid;
        }
    }
    let pivot = start;
    start = 0;
    end = nums.length - 1;
    if(target >= nums[pivot] && target <= nums[end]){
        start = pivot;
    } 
    else{
        end = pivot;
    }
    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        if(nums[mid] === target){
            return mid;
        } 
        else if(target > nums[mid]){
            start = mid + 1;
        } 
        else {
            end = mid - 1;
        }
    }   
    return -1;
};