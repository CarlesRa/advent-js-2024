/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  const keys = Object.keys(data[0])
  const lengths = {}
  keys.forEach(key => {
    const valueLenght = Math.max(...data.map(r => r[key]?.length ?? 0))
    lengths[key] = key.length > valueLenght ? key.length : valueLenght
  })
  let border = ''
  Object.keys(lengths).map(key => {
    border += '+'
    border += `${'-'.repeat(lengths[key] + 2)}`
  })
  border += '+'
  let result = `${border}\n`
  keys.forEach((key) => {
    result += `| ${key.charAt(0).toUpperCase()}${key.slice(1).padEnd(lengths[key] - 1, ' ')} `
  })
  result += `|\n${border}\n`
  data.forEach(d => {
    let row = ''
    Object.keys(d).forEach(key => {
      row += `| ${String(d[key] ?? '').padEnd(lengths[key], ' ')} `
    })
    result += `${row}|\n`
  })
  result += border
  return result
}

console.log(
  drawTable([
    { name: 'Alice', city: 'London', paco: 'paco' },
    { name: 'Bob', city: 'Paris', paco: 'paco'  },
    { name: 'Charlie', city: 'New York', paco: 'paco'  }
  ])
)
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

/* console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])
) */
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+