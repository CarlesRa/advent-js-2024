/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  function compareNodes(node1, node2) {
    if (!node1 && !node2) return true;
    if (node1.value !== node2.value) return false;
    return compareNodes(node1.left, node2.right) && compareNodes(node1.right, node2.left);
  }

  if (compareNodes(tree1, tree2)) {
    return [true, tree1.value];
  }

  return [false, tree1.value];
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']