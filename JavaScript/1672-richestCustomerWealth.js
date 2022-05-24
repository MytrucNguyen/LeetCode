/**
 * Get the sum of the array, 
 * then push that value to the richest array. 
 * Then return the maximum value of the array.
 */
const maximumWealth = (accounts) => {
    let richest = [];

    for (let i = 0; i < accounts.length; i++) {
        /* Pushing the sum of the array to the richest array. */
        richest.push(accounts[i].reduce(function (pv, cv) {
            return pv + cv;
        }, 0))
    }

    /* Returning the maximum value of the array. */
    return Math.max(...richest)
}

// Other Way 
const maximumWealth = (accounts) => {
    /* Mapping the accounts array and reducing the array to a single value. */
    let welth = accounts.map(a => a.reduce((i,j) => i + j), 0);
    
    return Math.max(...welth);
}


console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))