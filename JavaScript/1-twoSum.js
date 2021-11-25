var twoSum = (nums, target) => {
    var index = [];
    for(i = 0; i < nums.length; i++){
        for(j = i+1; j < (nums.length); j++) {
            total = nums[i] + nums[j]
            if(total == target) {
                index.push(i)
                index.push(j)
                return(index);
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))