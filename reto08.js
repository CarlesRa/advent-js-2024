/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  return indices.map((indice, index) => {
    const laneRepeats = indice >= 0 ? indice : length + indice;
    const spaceRepeats = indices.length - index - 1;
    const prefix = '~'.repeat(laneRepeats);
    const midChar = indice === 0 ? '~' : 'r';
    const suffix = '~'.repeat(length - laneRepeats - 1);

    return `${' '.repeat(spaceRepeats)}${prefix}${midChar}${suffix} /${index + 1}`;
  }).join('\n');
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
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


