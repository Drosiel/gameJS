/* eslint-disable @typescript-eslint/no-explicit-any */

import { Obj } from "../objects";

export interface ICardConstructor {}

export class Card extends Obj {
  width: number = 100;
  height: number = 150;
  color: string = "#321564";
}
