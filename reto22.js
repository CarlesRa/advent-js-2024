/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const result = []
  function backtrack(currentCombination, startIndex) {
    if (currentCombination.length > 0) {
      result.push([...currentCombination]);
    }
    for (let i = startIndex; i < gifts.length; i++) {
      currentCombination.push(gifts[i])
      backtrack(currentCombination, i + 1)
      currentCombination.pop()
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