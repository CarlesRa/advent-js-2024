/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const result = (char) => char === '·' ? 'none' : char === '*' ? 'eat' : 'crash'
  let locomotivePosition
  for (let i = 0; i < board.length; i++) {
    locomotivePosition = board[i].split('').indexOf('@');
    if (locomotivePosition !== -1) {
      if (mov === 'U') {
        return result(board[i - 1]?.charAt(locomotivePosition))
      } else if (mov === 'D') {
        return result(board[i + 1]?.charAt(locomotivePosition))
      } else if (mov === 'L') {
        return result(board[i]?.charAt(locomotivePosition - 1))
      } else {
        return result(board[i]?.charAt(locomotivePosition + 1))
      }
    }
  }
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