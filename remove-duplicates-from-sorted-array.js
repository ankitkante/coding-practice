/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let currentElem = nums[0]
    let anchor = 1

    for (let i = 1; i < nums.length; i++) {
        const elem = nums[i]
        if (elem !== currentElem) {
            currentElem  = elem
            nums[anchor] = elem
            anchor++
        }
    }

    return anchor
};

nums = [-23, -23, -18, -15, -15, -5, -5, -5, 0, 0, 5, 5, 5, 5, 77, 77]
// nums = [1]
const k = removeDuplicates(nums)
console.log(nums, k)