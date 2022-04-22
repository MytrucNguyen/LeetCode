var intersection = function(nums1, nums2) {
    let uniqueNums1 = [...new Set(nums1)]
    let uniqueNums2 = [...new Set(nums2)]
    let combined = (uniqueNums1.concat(uniqueNums2)).sort()
    let intersections = []
    
    for(let i = 0; i < combined.length; i++){
        if(combined[i + 1] === combined[i]){
            intersections.push(combined[i])
        }
    }
    return intersections
};