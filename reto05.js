/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const GROUP = Object.groupBy(shoes, ({ type }) => type);
  const GROUP_R = GROUP['R']?.map(s => s.size)
  const result = []
  GROUP['I']?.forEach(({ size }) => {
    if (!GROUP_R.includes(size)) { return }
    result.push(size)
    GROUP_R.splice(GROUP_R.indexOf(size), 1)
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