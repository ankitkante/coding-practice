// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for(var i=1;i<=k;i++){
    shift(nums)
  }  
};

var shift = function(nums){
    lastElem = nums[nums.length-1]
    for(var j=nums.length-2;j>=0;j--){
        nums[j+1] = nums[j]
    }

    nums[0] = lastElem
}

nums = [1,2,3,4,5,6,7]
rotate(nums, 3)
console.log(nums)