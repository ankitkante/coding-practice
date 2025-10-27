// https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */

// Approach 1: Not sure what I was trying to do here. Completely wrong
// var jump = function(nums) {
//     let currentCell = 0, jumps = 0
//     const n = nums.length
//     for(let i=0; (i<n && currentCell<n-1) ;i++){
//         if(currentCell + nums[i] === n-1){
//             jumps++
//             currentCell = currentCell + nums[i]
//         } else {
//             jumps++
//             currentCell = currentCell + 1
//         }
//     }

//     return jumps
// };

// // Approach 2: Some brute force approach that uses recursion
// var jump = function(nums){
//     return recur(nums, 0, 0)
// } 

// var recur = function(nums, i, jumpCount){
//     if(i >= nums.length-1) return jumpCount

//     var possibleJumps = new Array(nums[i]).fill(0)
//     for(let j=1; j<=nums[i]; j++){
//         const nextIndex = i + j
        
//         possibleJumps[j-1] = recur(nums, nextIndex, jumpCount+1)
//     }
//     console.log(i, possibleJumps)
//     return Math.min(...possibleJumps)
// }

// Approach 3: Recursion with memoization
// var jump = function(nums){
//     const memo = new Array(nums.length).fill(0)
//     recur(nums, 0, memo)
//     return memo[0]
// } 

// var recur = function(nums, i, memo){
//     if(i >= nums.length-1) return
//     if(memo[i] > 0) return memo[i]

//     var possibleJumps = new Array(nums[i]).fill(0)
//     for(let j=1; j<=nums[i]; j++){
//         const nextIndex = i + j
//         console.log(i, j, nextIndex)
//         recur(nums, nextIndex, memo)
//         possibleJumps[j-1] = 1 + (memo[nextIndex] || 0)
//     }

//     console.log(i, possibleJumps)

//     memo[i] = Math.min(...possibleJumps)
// }

// Approach 4: Bottom Up
var jump = function(nums){
    let target = nums.length - 1
    let i = 0
    let jumps = 0
    while(target!=0){
        if(i + nums[i] >= target){
            jumps++
            target = i
            i=0
        } else {
            i++
        }
    }

    return jumps
}

// const nums = [5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]
// const nums = [2,3,1,1,4]
const nums = [2,1]

console.log(jump(nums))