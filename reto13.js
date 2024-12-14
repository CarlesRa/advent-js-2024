/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const specialsChars = '*!?'
  let position =  [0, 0]
  let moveValue = 1
  let lastMove
  const handler = {
    R: () => position[0] += moveValue,
    L: () => position[0] -= moveValue,
    U: () => position[1] += moveValue,
    D: () => position[1] -= moveValue,
    '*': false,
    '!': false,
    '?': false
  }
  for (let move of moves) {
    moveValue = 1
    if (specialsChars.includes(move)) {
      handler[move] = true
      continue
    }
    if (handler['*']) {
      moveValue = 2
      handler['*'] = false
    } else if (handler['!']) {
      moveValue = -1
      handler[move]()
      handler['!'] = false
      continue
    } else if (handler['?']) {
      if (lastMove !== move) {
        handler[move]()
      }
      continue
    }
    handler[move]()
    if (handler['?']) continue
    lastMove = move
  }
  return position[0] === 0 && position[1] === 0 ? true : position
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Ejemplos paso a paso:
//isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

//isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'