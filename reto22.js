/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const result = []
  function backtrack(combination, start) {
    for (let i = start; i < gifts.length; i++) {
      combination.push(gifts[i])
      result.push([...combination])
      backtrack(combination, i + 1)
      combination.pop()
    }
  }
  backtrack([], 0)
  return result.sort((a, b) => a.length - b.length)
}

console.log(
  generateGiftSets(['car', 'doll', 'puzzle'])
)
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

//console.log(generateGiftSets(['car']))

console.log(generateGiftSets(['pen', 'notebook', 'eraser', 'pencil', 'marker']))