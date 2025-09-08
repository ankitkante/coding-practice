// Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let anchor = 0
    let anchorOccured = 1

    for (let i = 1; i < nums.length; i++) {
        const elem = nums[i]
        const currentElem = nums[anchor]
        if (elem !== currentElem) {
            anchor++
            nums[anchor] = elem
            anchorOccured = 1 // Reset count
        } else {
            if (anchorOccured !== 2) {
                anchor++
                nums[anchor] = elem
                anchorOccured++
            }

        }
        console.log(`i=${i}, anchor=${anchor}, arr=[${nums}], anchorOccured=${anchorOccured}`)
    }

    return anchor + 1
};

// nums = [-23, -23, -18, -15, -15, -5, -5, -5, 0, 0, 5, 5, 5, 5, 77, 77]
nums = [1, 1, 1, 1, 2, 2, 3]
// nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
const k = removeDuplicates(nums)
console.log(nums, k)