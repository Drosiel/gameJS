/* eslint-disable @typescript-eslint/no-explicit-any */
import { collisionDetection } from '../../engine/core/collision/collisionDetection'
import { Game } from '../../engine/core/game'
import { Engine } from '../../engine/engine'
import { Sprite } from '../../engine/sprite/sprite'

export class GameTwoInit {
  ctxUI: CanvasRenderingContext2D | null = null
  ctxGAME: CanvasRenderingContext2D | null = null
  ctxBG: CanvasRenderingContext2D | null = null

  game: Game | null = null
  elem: any = null
  posY: number = 300
  posX: number = 200
  velocity = { x: 0, y: 0 }
  gravity: number = 0.2
  keys = { a: { pressed: false }, d: { pressed: false } }
  lastKey = ''
  basket: any = null
  trash: any = null

  //TODO инициализация Игры
  init() {
    const game = new Engine.Game()

    this.game = game

    const { contextUI, contextGAME, contextBG } = game.init({
      width: window.innerWidth,
      height: window.innerHeight
    })

    this.ctxUI = contextUI
    this.ctxGAME = contextGAME
    this.ctxBG = contextBG

    //*тестовая среда -----------------------------------------------------------------*//

    this.basket = new Sprite({
      width: 100,
      height: 100,
      posX: this.posX,
      posY: this.posY,
      ctx: contextGAME,
      type: 'rect',
      color: 'orange'
    })

    this.trash = new Sprite({
      width: 200,
      height: 200,
      posX: 400,
      posY: 400,
      ctx: contextGAME,
      type: 'rect',
      color: 'green'
    })

    this.velocity.x = 0

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'a':
          this.keys.a.pressed = true
          this.lastKey = 'a'
          break
        case 'd':
          this.keys.d.pressed = true
          this.lastKey = 'd'
          break
      }
    })

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'a':
          this.keys.a.pressed = false
          this.lastKey = 'a'
          break
        case 'd':
          this.keys.d.pressed = false
          this.lastKey = 'd'
          break
      }
    })
  }

  //*тестовая среда -----------------------------
  //TODO запуск игры
  start() {
    if (this.game) {
      this.game.start(this.draw.bind(this))
    }
  }

  //TODO постоянная отрисовка
  draw() {
    this.basket.draw(100, 100, this.posX, this.posY, 'orange')
    this.trash.draw(100, 100, 400, 400, 'green')

    collisionDetection(this.basket, this.trash)

    if (this.ctxGAME) {
      this.posY += this.velocity.y
      this.posX += this.velocity.x

      this.velocity.x = 0

      if (this.posY + 100 + this.velocity.y >= this.ctxGAME.canvas.height) {
        this.velocity.y = 0
      } else {
        this.velocity.y += this.gravity
      }

      if (this.keys.a.pressed && this.lastKey === 'a') {
        this.velocity.x = -5
      } else if (this.keys.d.pressed && this.lastKey === 'd') {
        this.velocity.x = 5
      }
    }
  }
}
