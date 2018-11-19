const wrap = (line, maxLen) => {
  const lineArray = line.split(' ')
  let newString = ""
  for(let i= 0; i< lineArray.length; i++) {
    let currEle = lineArray[i]
    if(currEle.length > maxLen) {
      return ""
    }
  }
  return newString
}
module.exports = wrap;
