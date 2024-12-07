/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const stack = []

  for (const char of packages) {
    if (char === ')') {
      const reversed = []
      while (stack[stack.length - 1] !== '(') {
        reversed.push(stack.pop())
      }
      stack.pop()
      stack.push(...reversed)
    } else {
      stack.push(char)
    }
  }
  console.log(stack.join(''))
  return stack.join('')
}

fixPackages('a(b(cd(efg)))h')
// 'acdgfebh'

//fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

//fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

//fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

//fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"