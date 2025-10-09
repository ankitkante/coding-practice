// https://leetcode.com/problems/climbing-stairs/?envType=problem-list-v2&envId=dynamic-programming

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    curr = 1
    last = 1
    secondLast = 1

    for(let i=2;i<=n;i++){
        curr = last + secondLast
        secondLast = last
        last = curr
    }

    return curr
};


const n = 3
console.log(climbStairs(n))