/**
 * We start at the beginning and end of the array and find the minimum value between the two. 
 * We then multiply that value by the difference between the two indexes. 
 * We then move the index with the smaller value towards the center of the array. 
 * We repeat this process until the two indexes meet.
 * @param height - [1,8,6,2,5,4,8,3,7]
 * @returns 49
 */
const maxArea = (height) => {
    let maxArea = 0,
        startOfIndex = 0,
        endOfIndex = height.length - 1

    while (startOfIndex < endOfIndex) {
        /* Finding the minimum value between the two indexes. */
        let shorterLine = Math.min(height[startOfIndex], height[endOfIndex]);

        /* Finding the maximum area between the two indexes. */
        maxArea = Math.max(maxArea, shorterLine * (endOfIndex - startOfIndex));

        /* If there is a longer vertical line present */
        
        if (height[startOfIndex] < height[endOfIndex]) {
            startOfIndex++;
        } else {
            endOfIndex--;
        }
    }
    return maxArea
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))