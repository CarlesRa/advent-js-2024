/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const sizeMap = new Map()
  const pairedSizes = []

  for (const { type, size } of shoes) {
    const counters = sizeMap.get(size) ?? { I: 0, R: 0 };
    counters[type]++
    sizeMap.set(size, counters)
    if (counters.I > 0 && counters.R > 0) {
      counters.I--
      counters.R--
      pairedSizes.push(size)
    }
  }

  return pairedSizes
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 },
  { type: 'I', size: 42 },
  { type: 'I', size: 42 },
  { type: 'I', size: 42 },
  { type: 'I', size: 42 },
  { type: 'I', size: 42 },
  { type: 'R', size: 42 },
]

console.log(organizeShoes(shoes))

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes2))

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))