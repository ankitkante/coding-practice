// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let finalIndex = m + n -1
    let index1 = m - 1
    let index2 = n - 1
    while(index1 >= 0 && index2 >= 0){
        const item1 = nums1[index1]
        const item2 = nums2[index2]
        if(item1 > item2){
            nums1[finalIndex] = item1
            index1--;
            finalIndex--;
        } else {
            nums1[finalIndex] = item2
            index2--;
            finalIndex--
        }
    }

    for(let index = index1; index >=0; index--, finalIndex--){
        nums1[finalIndex] = nums1[index]
    }
    for(let index = index2; index >=0; index--, finalIndex--){
        nums1[finalIndex] = nums2[index]
    }
}



arr1 = [0]
arr1Len = 0
arr2 = [1]
arr2Len = 1

merge(arr1, arr1Len, arr2, arr2Len)
console.log(arr1)