// mode 05 3-stars
function organizeInventory(inventory) {
  let resp = {}
  inventory.forEach(item => {     
     if (!resp[item.category]) {
      resp[item.category] = {}
    }    
    resp[item.category][item.name] = 
      (resp[item.category][item.name] ?? 0) + item.quantity
  })
  return resp
}
// Mode 02 3-stars
/*return inventory.reduce((resp, item) => {
    if (!resp[item.category]) {
      resp[item.category] = {}
    }
    resp[item.category][item.name] =
      (resp[item.category][item.name] ?? 0) + item.quantity    
    return resp
  }, {})*/


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