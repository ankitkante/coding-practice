/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]]
    for(let i=1;i<numRows;i++){
        result[i] = []
        result[i][0] = 1
        result[i][i] = 1
        for(j=1;j<=i-1;j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
    }

    return result
};

const n = 5
console.log(generate(n))