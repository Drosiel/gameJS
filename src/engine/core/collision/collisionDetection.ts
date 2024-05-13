export const collisionDetection = (elem1: any, elem2: any) => {
  const { posX: x1, posY: y1, width: width1, height: height1 } = elem1
  const { posX: x2, posY: y2, width: width2, height: height2 } = elem2
  console.log(x1, width1)
  console.log(x2)

  if (x1 + width1 >= x2 && x1 <= x2 + width2 && y1 + height1 >= y2 && y1 <= y2 + height2) {
    return console.log('true')
  }

  return false
}
