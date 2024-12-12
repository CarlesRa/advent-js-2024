/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const checker = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100}
  let result = 0
  let oldValue
  for (let i = (ornaments.length - 1); i >= 0; i--) {
    const value = checker[ornaments.charAt(i)]
    if (!value) {
      return value
    }
    oldValue > value ? result -= value : result += value
    oldValue = value
  }
  return result
}

/*

  *: Copo de nieve - Valor: 1
  o: Bola de Navidad - Valor: 5
  ^: Arbolito decorativo - Valor: 10
  #: Guirnalda brillante - Valor: 50
  @: Estrella polar - Valor: 100

*/

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('o*'))   // 6   (5 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1)
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es desconocido)