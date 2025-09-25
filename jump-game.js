// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150   

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     let target = nums.length - 1
//     for(i = nums.length - 2; i>=0; i--){
//         if(i + nums[i] >= target){
//             target = i
//         }
//     }

//     return target === 0
// };

var canJump = function(nums) {
    let maxReach = 0
    for(i=0;i<nums.length;i++){
        if(i > maxReach) return false
        maxReach = Math.max(maxReach, i + nums[i])
    }

    return true
}


nums = [2,5,0,0]
console.log(canJump(nums))