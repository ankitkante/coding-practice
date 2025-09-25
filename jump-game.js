// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150   

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let target = nums.length - 1
    for(i = nums.length - 2; i>=0; i--){
        if(i + nums[i] >= target){
            target = i
        }
    }

    return target === 0
};


nums = [2,5,0,0]
console.log(canJump(nums))