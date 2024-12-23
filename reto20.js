/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const receivedAux = [...received]
  const result = {
    missing: {},
    extra: {},
  }
  expected.forEach((item, i) => {
    const index = receivedAux.indexOf(item)
    if (index === -1) {
      result.missing[item] = (result.missing[item] || 0) + 1
      return
    }
    receivedAux.splice(index, 1)
  })
  receivedAux.forEach((item, i) => {
    result.extra[item] = (result.extra[item] || 0) + 1
  })
  return result
}

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(
  fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
  )
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
  fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
  )
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }