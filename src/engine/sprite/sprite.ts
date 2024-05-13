/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ISpriteConstructor {
  width: number
  height: number
  posX: number
  posY: number
  ctx: CanvasRenderingContext2D
  type: 'rect' | 'circle'
  color: string
  img?: any
}

const spriteWidth = 1152 / 6
const spriteHeight = 1536 / 8
let frameX = 0
let frameY = 2
let gameFrame = 0
const staggerFrames = 10

const img = new Image()
img.src = '/Warrior_Purple.png'

export class Sprite {
  width: number
  height: number
  posX: number
  posY: number
  ctx: CanvasRenderingContext2D
  type: 'rect' | 'circle'
  color: string

  constructor({ width, height, posX, posY, ctx, type, color }: ISpriteConstructor) {
    this.width = width
    this.height = height
    this.posX = posX
    this.posY = posY
    this.ctx = ctx
    this.type = type
    this.color = color
  }

  animation() {
    this.ctx.drawImage(
      img,
      frameX * spriteWidth,
      frameY * spriteHeight,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight
    )
    if (gameFrame % staggerFrames == 0) {
      if (frameX < 5) {
        frameX++
      } else {
        frameX = 0
      }
    }

    gameFrame++
  }

  draw(width: number, height: number, posX: number, posY: number, color: string) {
    this.ctx.fillStyle = color
    if (this.type === 'rect') {
      this.ctx.fillRect(posX, posY, width, height)
    }

    if (this.type === 'circle') {
      this.ctx.arc(150, 150, 50, 0, 2 * Math.PI)
    }
    this.ctx.fill()

    // this.animation()
  }
}
