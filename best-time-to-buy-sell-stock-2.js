// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProf = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i] > prices[i-1]){
            maxProf+= (prices[i] - prices[i-1])
        }
    }

    return maxProf
};

const prices = [7,1,5,3,6,4]
const result = maxProfit(prices)
console.log(result)