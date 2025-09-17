// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, candidate = -10000000000000
    for(i=0;i<nums.length;i++){
        if(count ==0){
            candidate = nums[i]
            count = 1
        } else{
            if(nums[i] == candidate){
                count++
            } else {
                count--
            }
        }
    }

    return candidate
};