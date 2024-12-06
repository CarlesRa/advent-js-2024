/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const TYPE_I = 'I'
  const TYPE_R = 'R'
  const GROUP = Object.groupBy(shoes, ({ type }) => type);
  const GROUP_TYPE_R = GROUP[TYPE_R]
  const result = []

  GROUP[TYPE_I]?.forEach(({ size }) => {
    const index = GROUP_TYPE_R.findIndex(s => s?.size === size);
    if (index === -1) { return }
    result.push(size)
    GROUP_TYPE_R.splice(index, 1)
  })
  return result;
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

console.log(organizeShoes(shoes2));

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))