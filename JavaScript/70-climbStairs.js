/**
 * We're creating an array of length n + 1, 
 * and then we're iterating through the array and setting each
 * index to the sum of the previous two indices.
 */
const climbStairs = (n) => {
    let table = new Array(n + 1);

    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[table.length - 1];
}

console.log(climbStairs(2))
console.log(climbStairs(3))