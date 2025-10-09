/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Probably dynamic programming
// var generate = function(numRows) {
//     let result = [[1]]
//     for(let i=1;i<numRows;i++){
//         result[i] = []
//         result[i][0] = 1
//         result[i][i] = 1
//         for(j=1;j<=i-1;j++){
//             result[i][j] = result[i-1][j-1] + result[i-1][j]
//         }
//     }

//     return result
// };

// Pure Recursive
var generate = function(numRows){
    return recur(numRows)
}

var recur = function(numRows){
    if(numRows == 1) return [[1]]

    let result = recur(numRows-1)
    let arr = []
    arr[0] = 1
    arr[numRows-1] = 1
    const lastEntry = result[result.length-1]
    for(let i=1;i<=numRows-2;i++){
        arr[i] = lastEntry[i] + lastEntry[i-1]
    }

    return [...result, arr]
}

// Recursive with memoization
// var generate = function(numRows){
//     let memo = []
//     let result  = recur(numRows, memo)
//         memo.push(result)


//     return memo
// }

// var recur = function(numRows, memo){
//     if(numRows === 1) return [1]

//     const result = recur(numRows - 1, memo)
//     memo.push(result)
//     arr = []
//     arr[0] = 1
//     arr[numRows-1] = 1
//     for(let i=1;i<=numRows-2;i++){
//         arr[i] = result[i-1] + result[i]
//     }

//     return arr
// }

const n = 5
console.log(generate(n))