var productExceptSelf = function(nums) {
    var output = [];
    var result = 1;
    
    for(var i = 0; i<nums.length; i++){
        output[i] = result;
        result *= nums[i];
    }

    result = 1;
    for(var i = nums.length-1; i>=0; i--){
        output[i] *= result;
        result *= nums[i];
    }

    return output;
};


console.log(productExceptSelf([0,0])) // [ 0, 0 ]
console.log(productExceptSelf([1,1])) // [ 1, 1 ]
console.log(productExceptSelf([1,0])) // [ 0, 1 ]
console.log(productExceptSelf([0,4,0])) // [0,0,0]
console.log(productExceptSelf([1,2,3,4])) // [ 24, 12, 8, 6 ]
console.log(productExceptSelf([-1,1,0,-3,3])) // [ 0, 0, 9, 0, 0 ]