/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  return indices
    .map((indice, index) => {
      const position = indice >= 0 ? indice : length + indice;
      const repeats = indices.length - (index + 1);
      const lanes = '~'.repeat(length)
        .split('')
        .map((char, i) => (i === position ? (indice === 0 ? '~' : 'r') : char))
        .join('');
      return `${' '.repeat(repeats)}${lanes} /${index + 1}`;
    })
    .join('\n');
  /* let result = '';
  indices.forEach((indice, index) => {
    const position = indice >= 0 ? indice : length + indice
    const repeats = indices.length - (index + 1)
    let lanes = '~'.repeat(length)
    lanes = lanes.slice(0, position) + (indice === 0 ? '~' : 'r') + lanes.slice(position + 1)
    result +=
      `${repeats > 0 ? ' '.repeat(repeats) : ''}${lanes} /${index + 1}${index < indices.length - 1 ? '\n' : ''}`
  })
  return result */
}

//drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

//drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/


