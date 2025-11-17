// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Approach 1: Using division (Doesn't work when a number is zero)
    // let product = 1
    // for(let i=0;i<nums.length;i++){
    //     product = product * nums[i]
    // }

    // let result = []
    // for(let j=0;j<nums.length;j++){
    //     result[j] = product / nums[j]
    // }

    // return result

    // Approach 2: Matrix multiplication (LEft incomplete)
    // let matrix = []
    // for(let i=0;i<nums.length;i++){
    //     matrix[i] = []
    //     for(let j=0;j<nums.length;j++){
    //         matrix[i][j] = nums[i]*nums[j]
    //     }
    // }

    // console.log(matrix)

    // for(let i=0;i<nums.length;i++){
    //     let j = 0
    //     while(j<nums.length){
    //         if(i!==j){

    //         }
    //     }
    // }
    // return []

};

const nums= [1,2,3,4]
console.log(productExceptSelf(nums))