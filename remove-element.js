/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let validItemIndex = 0
    for(let i=0; i<nums.length;i++){
        const elem = nums[i]
        if(elem != val){
            nums[validItemIndex] = elem
            validItemIndex++
        }
    }

    return validItemIndex;
};

nums = [0,1,2,2,3,0,4,2]
val = 2
const k = removeElement(nums, val)
console.log(nums, k)