function FindWordStartingWith (book, query) {
  // Your code here:
  function FindWordStartingWith (book, query) {
    query = query.toLowerCase()
    console.log(query.length - 1)
    const txt = book.text.toLowerCase()
    console.log(txt)
    const result = [];
    for (let i = 0; i < txt.length; i++) {
      console.log(txt[i])
      //                                       ↑
      // const sliced = txt.slice(i, i + query.length)
      // console.log(sliced)
      // if(sliced === query && (i === 0 || txt[i - 1] === ' ')) result.push(i)    
      if(i === 0 || txt[i - 1] === ' '){
        for (let j = 0; j < query.length; j++) {
          console.log(query[j])
          //                                           ↑
          if(query[j] !== txt[i + j]) break
          if(j === query.length -1) result.push(i)
          
        }
      }
    }
    return result
  }
  
  
  module.exports = FindWordStartingWith
  const book = {
    id: 1,
    text:
      'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
  }
}

module.exports = FindWordStartingWith
