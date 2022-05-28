/**
 * We loop through the array, and for each element, 
 * we loop through the rest of the array and check if
 * the current element is equal to the element we're looping through. 
 * If it is, we increment the count.
 */
const numIdenticalPairs = (nums) => {
    let count = 0;
    /* Counting the number of duplicates in an array. */
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
}

// Avoiding Nested For Loops

const numIdenticalPairs = (nums) => {
    const temp = {}
    let count = 0

    for (const number of nums) {
        if (temp[number]) {
            count += temp[number];
            temp[number] += 1;
        } else {
            temp[number] = 1;
        }
    }
    return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
