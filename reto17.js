/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const rows = grid.length
  const cols = grid[0].length
  const result = Array(rows)
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const rowResult = Array(cols)
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      rowResult[colIndex] =
        (grid[rowIndex-1]?.[colIndex-1] | 0) +
        (grid[rowIndex-1]?.[colIndex] | 0) +
        (grid[rowIndex-1]?.[colIndex+1] | 0) +
        (grid[rowIndex]?.[colIndex-1] | 0) +
        (grid[rowIndex]?.[colIndex+1] | 0) +
        (grid[rowIndex+1]?.[colIndex-1] | 0) +
        (grid[rowIndex+1]?.[colIndex] | 0) +
        (grid[rowIndex+1]?.[colIndex+1] | 0)
    }
    result[rowIndex] = rowResult
  }
  return result
}

console.table(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
)
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.table(
  detectBombs([
    [true, false],
    [false, false]
  ])
)
// [
//   [0, 1],
//   [1, 1]
// ]

console.table(
  detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ])
)

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]