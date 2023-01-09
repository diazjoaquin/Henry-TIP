function mdArraySum (arr, count = 0) { 
  // for (const elem of arr) {
  //   count = typeof elem === 'number' ?  count + elem : mdArraySum(elem, count)  
  // }
  // return count;
  return arr.reduce((count, elem) => count + (typeof elem === 'number' ? elem : mdArraySum(elem, count)), 0)
}

module.exports = mdArraySum
