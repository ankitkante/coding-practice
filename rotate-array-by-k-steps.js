// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   let len = nums.length
//   const sanitizedK = k % len
//   i = 0
//   nextElem = nums[i]
//   for (let pass = 1; pass <= len; pass++) {
//     if (pass >= Math.ceil(len / 2) && i == 0) {
//       i = 1
//       nextElem = nums[i]
//     }
//      console.log(`pass=${pass}`,`i=${i}`)

//     let newIndex
//     if (i <= (len - sanitizedK - 1)) {
//       newIndex = i + sanitizedK
//     } else {
//       newIndex = i - (len - sanitizedK)
//     }

//     let newIndexItem = nums[newIndex]
//     nums[newIndex] = nextElem
//     i = newIndex
//     nextElem = newIndexItem


//     console.log(nums)
//   }
// }

var rotate = function(nums, k) {
  effectiveK = k % nums.length
  reverse(nums, 0, nums.length-1)
  reverse(nums, 0, effectiveK-1)
  reverse(nums, effectiveK, nums.length-1)
}

var reverse = function(arr, start, end){
  let leftIndex = start
  let rightIndex = end

  while(leftIndex < rightIndex){
    const temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp
    leftIndex++
    rightIndex--
  }
}
        
nums = [1,2,3,4,5,6,7]


rotate(nums, 3)
console.log(nums)