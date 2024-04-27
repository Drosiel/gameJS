import { Sprite } from "../../engine/sprite/sprite";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IObjConstructor {
  ctx: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  zIndex?: number;
  selected?: boolean;
  offset?: any;
  text: string;
}

export class Obj {
  width: number = 0;
  height: number = 0;
  color: string = "#987654";
  zIndex: number;
  selected: boolean = false;
  offset?: any;
  sprite: Sprite;
  text: string = "";

  constructor({ ctx, posX, posY, zIndex = 0, text }: IObjConstructor) {
    this.zIndex = zIndex;
    this.sprite = new Sprite({
      posX: posX,
      posY: posY,
      ctx: ctx,
      width: this.width,
      height: this.height,
      text: text,
    });
  }

  draw() {
    this.sprite.draw(this.width, this.height, this.color);
  }
}
