//  https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

var hIndex = function(citations) {
  citations.sort((a,b) => b - a)
  let result = 0
  let i = 0
  while((i < citations.length)){
    if(i+1 > citations[i]){
        result = i
        break
    }
    i++
  }
  

  return i
};

// const arr = [1,3,1]
const arr = [3,0,6,1,5]
console.log(hIndex(arr))
