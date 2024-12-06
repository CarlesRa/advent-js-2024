function inBox(box) {
  const inBox = '#*#'
  const regex = /\s/g
  let isInBox = false
  box.forEach((value, index) => {
    if (value.replace(regex, '') === inBox &&
      index > 0 && index < box.length - 1) {
      isInBox = true
      return
    }
  });
  return isInBox
}

console.log(
  inBox([
    "###",
    "#*#",
    "###"
  ]),
  inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ]),
  inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ]),
  inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])
)