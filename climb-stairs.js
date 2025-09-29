// https://leetcode.com/problems/climbing-stairs/?envType=problem-list-v2&envId=dynamic-programming

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1) return 1
    if(n==2) return 2

    return climbStairs(n-1)+climbStairs(n-2)
};

const n = 3
console.log(climbStairs(n))