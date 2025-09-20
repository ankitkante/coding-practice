/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            diff = prices[j] - prices[i]
            if(diff > maxProfit){
                maxProfit = diff
            }
        }
    }

    return maxProfit
};

let prices = [7,1,5,3,6,4]
let result = maxProfit(prices)

console.log(result)