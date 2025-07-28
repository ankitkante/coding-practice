/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    recursiveFn(nums1, m, nums2, n, 0, 0)
}

var recursiveFn = function (nums1, m, nums2, n, currentPointer, index2) {
    if (index2 >= n) {
        return
    }

    const item1 = nums1[currentPointer]
    const previousItem = nums1[currentPointer - 1]
    const item2 = nums2[index2]

    if (item1 == 0 && (previousItem && previousItem > 0)) {
        // Empty slots reached. Just put the items in nums1
        nums1[currentPointer] = item2
        recursiveFn(nums1, m, nums2, n, ++currentPointer, ++index2)

    } else {
        if (item1 <= item2) {
            recursiveFn(nums1, m, nums2, n, ++currentPointer, index2)
        } else {
            shift(nums1, currentPointer, index2, m)
            nums1[currentPointer] = item2
            recursiveFn(nums1, m, nums2, n, currentPointer, ++index2)
        }
    }

}

var shift = function (arr, startIndex, offset, m) {
    const endIndex = m + offset + 1
    for (let index = endIndex; index >= startIndex; index--) {
        arr[index] = arr[index - 1]
    }
}

arr1 = [0]
arr1Len = 3
arr2 = [1]
arr2Len = 3

merge(arr1, arr1Len, arr2, arr2Len)
console.log(arr1)