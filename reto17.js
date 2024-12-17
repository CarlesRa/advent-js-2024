/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const directions = [
    [0, 1], [0, -1], [1, 0], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  return grid.map((row, rowIndex) =>
    row.map((_, colIndex) =>
      directions.reduce((bombCount, [dRow, dCol]) =>
        bombCount + (grid[rowIndex + dRow]?.[colIndex + dCol] ?? 0)
      , 0)
    )
  );
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