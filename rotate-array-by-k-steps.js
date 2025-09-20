// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length
  const sanitizedK = k % len
  
  count = 0
  for (let start = 0; count < len; start++) {
    let current = start
    nextElem = nums[start]

    do {
      let newIndex = (current + sanitizedK) % len
      // if (current <= (len - sanitizedK - 1)) {
      //   newIndex = current + sanitizedK
      // } else {
      //   newIndex = current - (len - sanitizedK)
      // }

      let temp = nums[newIndex]
      nums[newIndex] = nextElem
      current = newIndex
      nextElem = temp
      count++
    } while (start !== current)
  }
}



nums = [1, 2, 3, 4, 5, 6, 7]


rotate(nums, 3)
console.log(nums)