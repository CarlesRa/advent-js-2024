/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  return indices.map((indice, index) => {
    const laneRepeats = indice >= 0 ? indice : length + indice;
    const spaceRepeats = indices.length - index - 1;
    const laneContent =
      `${'~'.repeat(laneRepeats)}${indice === 0 ? '~' : 'r'}${'~'.repeat(length - laneRepeats - 1)}`;
    return `${' '.repeat(spaceRepeats)}${laneContent} /${index + 1}`;
  }).join('\n');
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


