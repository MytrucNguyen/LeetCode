const findMedianSortedArrays = (nums1, nums2) => {
    const mergeNums = [...nums1, ...nums2];
    mergeNums.sort((a, b) => a - b);
    const lengthOfMergeArray = mergeNums.length;
    if(lengthOfMergeArray % 2 === 0) {
        return (mergeNums[lengthOfMergeArray / 2 - 1] + mergeNums[lengthOfMergeArray / 2]) / 2;
    }
    else {
        return mergeNums[Math.floor(lengthOfMergeArray / 2)];
    }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));