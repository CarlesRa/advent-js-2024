function createFrame(names) {
  const maxLenght = Math.max(...names.map(name => name.length))
  const border = '*'.repeat(maxLenght + 4)
  let result = border
  names.forEach(n => {
    result +=
      `\n* ${n.padEnd(maxLenght, ' ')} *`
  })
  result += `\n${border}`
  return result
}

console.log(createFrame(['midu']))
console.log(createFrame(['a', 'bb', 'ccc']))
console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))