function SumArray (arr, n) {
  console.log(arr)
  //                        s
  //                        e
  console.log(n)
  // for (let i = 0; i < arr.length -1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     const sum = arr[i] + arr[j]
  //     if(sum === n) return true
  //   }    
  // }
  // return false
  let start = 0;
  let end = arr.length -1
  while (start !== end) {
    const sum = arr[start] + arr[end]
    if(sum === n) return true
    if(sum < n) start++
    else end--    
  }
 return false

}
//    O(n**2)

module.exports = SumArray

