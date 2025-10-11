// https://leetcode.com/problems/pascals-triangle-ii/?envType=problem-list-v2&envId=dynamic-programming

// Approach 1: Pure Recursive
// var getRow = function(rowIndex) {
//     return recur(rowIndex)
// };

// var recur = function(rowIndex){
//     if(rowIndex === 0) return [1]

//     let prevRow = recur(rowIndex - 1)
//     arr = []
//     arr[0] = 1
//     arr[rowIndex] = 1
//     for(let i=1; i<=(rowIndex - 1); i++){
//         arr[i] = prevRow[i] + prevRow[i-1]
//     }

//     return arr
// }

// Approach 2: Two for loops
var getRow = function(rowIndex){
    let prevRow = [1]
    for(let i=1; i<=rowIndex;i++){
        arr = []
        arr[0] = 1
        arr[i] = 1
        for(let j=1;j<=i-1;j++){
            arr[j] = prevRow[j] + prevRow[j-1]
        }

        prevRow = arr
    }

    return prevRow
}

const rowIndex = 4
console.log(getRow(rowIndex))