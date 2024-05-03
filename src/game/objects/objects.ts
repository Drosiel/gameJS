import { Sprite } from '../../engine/sprite/sprite'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IObjConstructor {
  id: number
  ctx: CanvasRenderingContext2D
  posX: number
  posY: number
  zIndex?: number
  selected?: boolean
  offset?: any
  text: string
  value: number
}

export class Obj {
  id: number = 0
  width: number = 0
  height: number = 0
  color: string = '#987654'
  zIndex: number
  selected: boolean = false
  offset?: any
  sprite: Sprite
  text: string = ''
  value: number = 0

  constructor({ ctx, posX, posY, zIndex = 0, text, id, value }: IObjConstructor) {
    this.zIndex = zIndex
    this.sprite = new Sprite({
      posX: posX,
      posY: posY,
      ctx: ctx,
      width: this.width,
      height: this.height,
      text: text
    })
    this.value = value
    this.id = id
  }

  draw() {
    this.sprite.draw(this.width, this.height, this.color, this.text)
  }
}
