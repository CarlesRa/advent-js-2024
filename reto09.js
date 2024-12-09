/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] }
  const [dx, dy] = directions[mov]

  const i = board.findIndex(row => row.includes('@'))
  if (i === -1) return 'none'

  const locomotivePosition = board[i].indexOf('@')
  const newRow = board[i + dx]?.[locomotivePosition + dy]

  return newRow === '·' ? 'none' : newRow === '*' ? 'eat' : 'crash'
}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha