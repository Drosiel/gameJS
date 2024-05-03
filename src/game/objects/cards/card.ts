/* eslint-disable @typescript-eslint/no-explicit-any */

import { Obj } from '../objects'

export interface ICardConstructor {}

export class Card extends Obj {
  width: number = 100
  height: number = 150
  color: string = 'red'
  dash: boolean = false

  dashOn(value: any) {
    console.log(value)
    this.dash = true
    this.color = 'green'
    this.text = value
  }

  dashOff() {
    this.dash = false
    this.color = 'red'
    this.text = String(this.id)
  }
}
