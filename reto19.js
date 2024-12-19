/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }
  // distribute in boxes
  const resultBoxes = {}
  const boxCapacities = [1, 2, 5, 10]
  let indexCapacity = boxCapacities.length - 1
  while(weight > 0) {
    const capacity = boxCapacities[indexCapacity]
    if (weight - boxCapacities[indexCapacity] >= 0) {
      weight -= capacity
      resultBoxes[capacity] = (resultBoxes[capacity] | 0) + 1
    } else {
      indexCapacity--
    }
  }
  // paint boxes
  let boxes = []
  const keys = Object.keys(resultBoxes)
  keys.forEach((key, index) => {
    for (let i = 0; i < resultBoxes[key]; i++) {
      let box = []
      if (index > 0 || i > 0) {
        box = [...boxRepresentations[key].slice(1)]
      } else {
        box = [...boxRepresentations[key]]
      }
      if (index < keys.length - 1) {
        box[box.length - 1] += boxRepresentations[keys[index + 1]][0].trim().slice(box[box.length - 1].length - 1)
      }
      boxes.push(...box)
    }
  })
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