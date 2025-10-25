 
var getMaximumConsecutive = function (coins) {
    coins.sort((a, b) => a - b);

    let count = 0;

    for (let coin of coins) {
        if (coin <= count + 1) {
            count += coin
        } else {
            break;
        }
    }
    return count + 1;


};