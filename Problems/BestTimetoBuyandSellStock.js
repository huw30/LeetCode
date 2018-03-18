/**

Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.

Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could 
have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

Time Complexity: O(n)
Space complexity: O(1)
*/
function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
        throw new Error('Need at least 2 prices to work');
    }

    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
    
    for (let i=1; i<stockPrices.length; i++) {
        maxProfit = Math.max(stockPrices[i] - minPrice, maxProfit);
        minPrice = Math.min(minPrice, stockPrices[i]);
    }
    

    return maxProfit;
}

const stockPrices = [10, 7, 5, 2, 1];
console.log(getMaxProfit(stockPrices));