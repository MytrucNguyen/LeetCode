/**
 * @param {number[]} prices
 * @return {number}
 */
/*  */
/* Finding the maximum profit that can be made from 
a given array of stock prices. */
var maxProfit = function (prices) {
    let mostGain = 0;

    /* Setting the lestGain to the maximum value of a number. */
    let lestGain = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {
        /* Setting the lestGain to the minimum value of a number. */
        lestGain = Math.min(lestGain, prices[i]);

        /* Checking if the current price is greater than the lestGain. 
        If it is, then it is setting the mostGain to the maximum value of the mostGain 
        and the current price minus the lestGain. */
        if (prices[i] > lestGain) {
            mostGain = Math.max(mostGain, prices[i] - lestGain);
        }
    }

    return mostGain;
};

// Better Memory Distribution 
var maxProfit = function (prices) {
    let start = 0, currentMax = 0, maxProfit = 0;
    for (let end = 1; end < prices.length; end++) {
        if (prices[end] < prices[start]) {
            start = end;
        }
        currentMax = prices[end] - prices[start];
        maxProfit = Math.max(currentMax, maxProfit);
    }
    return maxProfit
};

// Better Runtime
var maxProfit = function(prices) {
    let max = Number.MIN_VALUE;
    let currentBuy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - currentBuy > max) max = prices[i] - currentBuy;
        if (currentBuy > prices[i]) currentBuy = prices[i];
    }
    return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))