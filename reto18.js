/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const agendaList = agenda.split('\n')
  if (agendaList.filter(a => a.includes(phone)).length !== 1) return null
  const contact = agendaList.find(a => a.includes(phone))
  const parts = contact.replace(/\+?\d+-\d{3}-\d{3}-\d{3}/, '').split(/<([^<>]+)>/).filter(Boolean)
  const name = parts.find(p => p.split(' ').length === 2)
  const address = parts.find(p => p !== name)
  return { name: name.trim(), address: address.trim() }
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados