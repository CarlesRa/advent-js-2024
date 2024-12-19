/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  };
  const resultBoxes = {}
  const boxCapacities =
    Object.keys(boxRepresentations).map(Number).sort((a, b) => b - a)
  for (const capacity of boxCapacities) {
    while (weight >= capacity) {
      weight -= capacity;
      resultBoxes[capacity] = (resultBoxes[capacity] || 0) + 1
    }
  }
  const boxes = []
  const keys = Object.keys(resultBoxes)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const nextKey = keys[i + 1]
    const boxCount = resultBoxes[key]
    for (let j = 0; j < boxCount; j++) {
      const isFirstBox = j === 0 && i === 0
      const box = isFirstBox ? boxRepresentations[key] : boxRepresentations[key].slice(1)
      if (nextKey) {
        const lastLine = box[box.length - 1]
        const topNextBox = boxRepresentations[nextKey][0].trim()
        box[box.length - 1] = lastLine + topNextBox.slice(lastLine.length - 1)
      }
      boxes.push(...box)
    }
  }
  return boxes.join('\n')
}

//console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|

//console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

//console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

//console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

//distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

//distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

console.log(distributeWeight(7))
//  ___
// |___|_
// |     |
// |_____|