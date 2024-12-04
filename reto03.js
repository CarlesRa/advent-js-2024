// mode 08 5-stars
function organizeInventory(inventory) {
  const organizedInventory = {};
  for (const { category, name, quantity } of inventory) {
    if (!organizedInventory[category]) {
      organizedInventory[category] = {};
    }
    organizedInventory[category][name] = 
      (organizedInventory[category][name] ?? 0) + quantity;
  }
  
  return organizedInventory;
}

const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventary))

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventary2))