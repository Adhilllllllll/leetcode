
var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b);
    let total = prices[0] + prices[1];
    if (total > money) {
        return money;
    }
    return money - total;
};