/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0, smallest = 0
    for(let i=1;i<prices.length;i++){
        if(prices[i]< prices[smallest]){
            smallest = i
        }else {
            diff = prices[i] - prices[smallest]
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