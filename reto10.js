/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registries = { A: undefined }

  for (let i = 0; i < instructions.length; i++) {
    const [command, ...args] = instructions[i].split(' ')
    if (command === 'MOV') {
      const [source, target] = args
      const value = isNaN(source) ? registries[source] ?? 0 : Number(source)
      registries[target] = value
    } else if (command === 'INC' || command === 'DEC') {
      const [reg] = args
      registries[reg] = (registries[reg] ?? 0) + (command === 'INC' ? 1 : -1)
    } else if (command === 'JMP') {
      const [reg, target] = args
      const jumpIndex = Number(target) - 1
      if ((registries[reg] ?? 0) === 0 && jumpIndex >= -1) {
        i = jumpIndex
      }
    }
  }
  return registries.A
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

//console.log(compile(instructions)) // -> 2


/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

const instructions2 = [
  "MOV 2 X",
  "DEC X",
  "DEC X",
  "JMP X 1",
  "MOV X A"
]

//console.log(compile(instructions2))

const instructions3 = [
  "MOV 5 B",
  "DEC B",
  "MOV B A",
  "INC A"
]

//console.log(compile(instructions3))

/* console.log(compile([
  "INC A",
  "INC A",
  "DEC A",
  "MOV A B",
])) */

console.log(compile([
  "MOV 2 X",
  "DEC X",
  "DEC X",
  "JMP X 1",
  "MOV X A"
]))

console.log(compile([
  "MOV 3 C",
  "DEC C",
  "DEC C",
  "DEC C",
  "JMP C 3",
  "MOV C A"
]))