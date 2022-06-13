/**
 * For each coin, we can either use it or not use it. 
 * If we use it, we reduce the amount and continue the same process for the remaining amount. 
 * If we don’t use it, we ignore it and continue the same process for the original amount.
 */
const change = (amount, coins, memo = {}) => {
    let key = amount + "-" + coins;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    let currentCoin = coins[coins.length - 1];

    let total = 0;
    for (let qty = 0; qty * currentCoin <= amount; qty++) {
        total += change(amount - qty * currentCoin, coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return memo[key];

}

console.log(change(5, [1, 2, 5]))
console.log(change(500, [3, 5, 7, 8, 9, 10, 11]))