/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;
    let leftIndex = 0,
        rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
        const elem = nums[leftIndex];
        if (elem == val) {
            nums[leftIndex] = nums[rightIndex];
            nums[rightIndex] = -1;
            rightIndex--;
        } else {
            k++;
            leftIndex++;
        }
    }

    if (nums[leftIndex] == val) {
        nums[leftIndex] = -1
    } else {
        k + 1
    }

    return k;
};

nums = [0,1,2,2,3,0,4,2]
val = 2
const k = removeElement(nums, val)
console.log(nums, k)