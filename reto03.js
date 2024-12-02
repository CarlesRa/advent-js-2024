function organizeInventory(inventory) {
  let result = {}
  inventory.forEach(item => {
    if (Object.hasOwn(result, item.category)) {
      if (Object.hasOwn(result[item.category], item.name)){
        result[item.category][item.name] += item.quantity
      } else {
        result[item.category][item.name] = item.quantity
      }
    } else {
      result[item.category] = {
        [item.name]: item.quantity
      }
    }
  })
  return result
}

const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventary));

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventary2));