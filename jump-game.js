// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150   

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return recursiveFn(nums, 0)
};

var recursiveFn = function(nums,  currentLocation){
    if(currentLocation >= nums.length - 1){
        // If array is crossed return true
        return true
    }

    const current = nums[currentLocation]
    if(current == 0){
        // If stumbled upon a zero jump location, return false
        return false
    }

    // Start from 1 till max number of jumps and see if anyone takes us to the end of the array
    for(let j = 1; j <= current; j++){
        next = currentLocation + j
        const result = recursiveFn(nums, next)
        if(result) {
            return true
        } 
        // else {
        // do nothing. Move on to the next jump count
        // }
    }

    // If still not reached the end of the array, that means nothing we can do
    return false
}

nums = [2,5,0,0]
console.log(canJump(nums))