function longestIncreasingSubsequence (nums) {
  const sequences = [];
  let longest = 0;
  for (const num of nums) {
    const sequenceCopy = [...sequences]
    sequences.push([num])
    for (const seq of sequenceCopy) {
      if(num > seq[seq.length -1]){
        const newSequence = [...seq, num]
        sequences.push(newSequence)
        if(newSequence.length > longest) longest = newSequence.length
      }      
    }    
  }
  return longest;
}

module.exports = longestIncreasingSubsequence
