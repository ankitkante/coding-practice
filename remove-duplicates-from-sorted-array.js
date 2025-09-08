// Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let anchor = 0

    for (let i = 1; i < nums.length; i++) {
        const elem = nums[i]
        if (elem !== nums[anchor]) {
            anchor++
            nums[anchor] = elem
        }
    }

    return anchor+1
};

nums = [-23, -23, -18, -15, -15, -5, -5, -5, 0, 0, 5, 5, 5, 5, 77, 77]
// nums = [1]
const k = removeDuplicates(nums)
console.log(nums, k)