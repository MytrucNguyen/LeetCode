/**
 * We find the maximum value in the array, 
 * then we add the extraCandies to each value in the array and
 * check if it's greater than or equal to the maximum value.
 */
const kidsWithCandies = (candies, extraCandies) => {
    /* Using the spread operator to spread the array into individual arguments 
    and finding the max value from array*/
    const max = Math.max(...candies);

    /*Map to iterate through the candies array and add the
    extraCandies to each element in the array. 
    Then it is comparing the sum of each element to the max value. 
    If the sum is greater than or equal to the max value, it returns true. */
    return candies.map(candy => candy + extraCandies >= max);
}

console.log(kidsWithCandies([2,3,5,1,3], 3));