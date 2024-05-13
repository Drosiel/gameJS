/* eslint-disable @typescript-eslint/no-explicit-any */

import { cursorInRect, getMouseCoords } from '../../engine/core/dragAndDrop/dragAndDrop'
import { Game } from '../../engine/core/game'
import { Engine } from '../../engine/engine'
import { Card } from '../objects/cards/card'
import { Obj } from '../objects/objects'
import { DeckGameOne, ICardOne } from './deck/deck'

export class GameOneInit {
  ctxUI: CanvasRenderingContext2D | null = null
  ctxGAME: CanvasRenderingContext2D | null = null
  ctxBG: CanvasRenderingContext2D | null = null

  game: Game | null = null
  arrayElements: any[] = []
  selectCard: any = null
  findCards: any = []

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

    this.arrayElements = DeckGameOne.sort(() => Math.random() - 0.5).map(
      (e: ICardOne, idx) =>
        new Card({
          ctx: contextGAME,
          posX: 120 * (idx <= 2 ? idx + 1 : idx - 2),
          posY: 100 + (idx <= 2 ? 0 : 200),
          zIndex: idx,
          text: String(e.id),
          id: e.id,
          value: e.value
        })
    )

    this.ctxGAME.canvas.addEventListener('click', (e: any) => {
      let mouse: any

      if (this.ctxGAME?.canvas) {
        mouse = getMouseCoords({ canvas: this.ctxGAME.canvas, event: e })
      }

      this.arrayElements.forEach((elem: Card) => {
        if (
          cursorInRect(
            mouse.x,
            mouse.y,
            elem.sprite.posX,
            elem.sprite.posY,
            elem.width,
            elem.height
          )
        ) {
          elem.dashOn(elem.value)

          if (!this.selectCard) {
            this.selectCard = elem
          } else {
            if (this.selectCard.value === elem.value && this.selectCard.id !== elem.id) {
              this.findCards.push(elem.value)
              this.selectCard = null
            } else {
              elem.dashOn(elem.value)
              setTimeout(() => {
                this.selectCard = null
                elem.dashOff()
                this.arrayElements.forEach((elem: Card) => {
                  if (!this.findCards.includes(elem.value)) {
                    elem.dashOff()
                  }
                })
              }, 1000)
            }
          }
        }
      })
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
    if (this.arrayElements) {
      this.arrayElements.forEach((element: Obj, idx) => {
        element.draw(120 * (idx <= 2 ? idx + 1 : idx - 2), 100 + (idx <= 2 ? 0 : 200))
      })
    }
  }
}
