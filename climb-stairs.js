// https://leetcode.com/problems/climbing-stairs/?envType=problem-list-v2&envId=dynamic-programming

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {}
    return recur(n, memo)
};

var recur = function(n, memo){
    if(n==1) return 1
    if(n==2) return 2

    if(memo.hasOwnProperty(n)){
        return memo[n]
    }

    memo[n] =  recur(n-1, memo)+recur(n-2, memo)

    return memo[n]
}

const n = 4
console.log(climbStairs(n))