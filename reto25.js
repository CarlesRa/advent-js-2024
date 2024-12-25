/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let result = 0
  handleResult(code)
  function handleResult(code) {
    const handler = {
      '>': () => null,
      '+': () => result++,
      '-': () => result--,
      ']': () => null,
      '}': () => null,
    }
    let pointer = 0
    while (pointer < code.length) {
      const symbol = code[pointer]
      if (symbol === '[') {
        const index = code.slice(pointer).indexOf(']') + code.slice(0, pointer).length
        const subStr = code.substring(pointer + 1, index)
        while(result !== 0) {
          handleResult(subStr)
        }
        pointer += subStr.length + 1
        continue
      } else if (symbol === '{') {
        const index = code.slice(pointer).indexOf('}') + code.slice(0, pointer).length
        const subStr = code.substring(pointer + 1, index)
        if (result !== 0) {
          handleResult(subStr)
        }
        pointer += subStr.length + 1
        continue
      }
      handler[symbol]()
      pointer++
    }
  }
  return result
}

console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5
