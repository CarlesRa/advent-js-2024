/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const agendaList = agenda.split('\n')
  const agendaFiltered = agendaList.filter(a => a.includes(phone))
  if (agendaFiltered.length === 0 || agendaFiltered.length > 1) return null
  const index = agendaList.findIndex(contact => contact.includes(phone))
  const nameAndDirection = agendaList[index].split(
    /\+?\d+-\d{3}-\d{3}-\d{3}/).filter(a => a !== '').join('')
  const nameDirectionList = nameAndDirection.split(/<([^<>]+)>/).filter(n => n !== '')
  const nameIndex = nameDirectionList.findIndex(n => n.split(' ').length === 2)
  return {
    name:nameDirectionList[nameIndex],
    address: nameDirectionList[(nameIndex > 0 ? 0 : 1)].trim()
  }
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