/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
    if (stockPrices.length === 1) {
        return 0;
    }
    stockPrices.sort(function (a, b) { return a[0] - b[0] });
    let count = 1;
    for (let i = 2; i < stockPrices.length; i++) {
        let x1 = BigInt(stockPrices[i - 2][0]);
        let x2 = BigInt(stockPrices[i - 1][0]);
        let x3 = BigInt(stockPrices[i][0]);
        let y1 = BigInt(stockPrices[i - 2][1]);
        let y2 = BigInt(stockPrices[i - 1][1]);
        let y3 = BigInt(stockPrices[i][1]);
        if ((y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)) {
            count++;
        }

    }
    return count;
};
