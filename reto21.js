/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  if (!tree) { return 0 }
  const leftDepth = treeHeight(tree.left)
  const rightDepth = treeHeight(tree.right)
  return Math.max(leftDepth, rightDepth) + 1
}

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

console.log(treeHeight(tree))