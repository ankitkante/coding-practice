// Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let anchor = 2
    for(i=2;i<nums.length;i++){
        if(nums[i] != nums[anchor-2]){
            nums[anchor] = nums[i]
            anchor++
        }
    }
    
    return anchor
};

nums = [-23, -23, -18, -15, -15, -5, -5, -5, 0, 0, 5, 5, 5, 5, 77, 77]
// nums = [1, 1, 1, 1, 2, 2, 3]
// nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
const k = removeDuplicates(nums)
console.log(nums, k)