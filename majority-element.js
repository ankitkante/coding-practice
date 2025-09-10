// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = {}
    let majority
    for(i=0;i<nums.length;i++){
        const elem = nums[i]
        if(countMap.hasOwnProperty(elem)){
            countMap[elem] = countMap[elem] +1
        } else {
            countMap[elem] = 1
        }

        if(countMap[elem] > Math.floor(nums.length/2)){
            majority = elem
        }
    }  
    
    return majority
};