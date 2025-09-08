/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let currentElem = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const elem = nums[i]
        if (elem === currentElem) {
            nums[i] = -1000
        } else {
            currentElem  = elem
        }
        // console.log(nums)
    }

    let anchor = 1
    for (let j = 1; j < nums.length; j++) {
        const elem = nums[j]
        if (elem !== -1000) {
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