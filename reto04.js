function createXmasTree(height, ornament) {
  const totalWidth = height + (height - 1)
  const stuffed = '_'
  const trankFill = (totalWidth - 1) / 2
  const trunk = `${stuffed.repeat(trankFill)}#${stuffed.repeat(trankFill)}`
  let ornaments = 1
  let result = ''
  for (let i = 1; i <= height; i++)  {
    const fill = (totalWidth - ornaments) / 2    
    result += 
      `${stuffed.repeat(fill)}${ornament.repeat(ornaments)}${stuffed.repeat(fill)}\n`
    ornaments += 2
  }
  result += `${trunk}\n`
  result += trunk
  return result
}

const tree = createXmasTree(5, '*')
console.log(tree)

const tree2 = createXmasTree(3, '+')
console.log(tree2)


const tree3 = createXmasTree(6, '@')
console.log(tree3)
